import React, { useState, useEffect, useRef } from "react";
import { Chart, Line } from "react-chartjs-2";
import io from "socket.io-client";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import SomeChart from "./SomeChart";
import { socket } from "@/socket";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ENDPOINT = "http://localhost:8001";

export function Graph() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [bBettingPhase, setbBettingPhase] = useState(false);
  const [bettingPhaseTime, setBettingPhaseTime] = useState(-1);
  const [globalTimeNow, setGlobalTimeNow] = useState(0);
  const [liveMultiplier, setLiveMultiplier] = useState("CONNECTING...");
  const [liveMultiplierSwitch, setLiveMultiplierSwitch] = useState(false);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  const [chartSwitch, setChartSwitch] = useState(false);
  const [gamePhaseTimeElapsed, setGamePhaseTimeElapsed] = useState();

  const multiplierCount = useRef([]);
  const timeCount_xaxis = useRef([]);
  const realCounter_yaxis = useRef(5);

  // const chartData = {
  //   labels: ["0", "2", "4", "6", "8", "3", "2", "3", "2", "3"],
  //   datasets: [
  //     {
  //       data: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4],
  //       borderColor: "black",
  //       tension: 0.2,
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   plugins: {
  //     legend: false,
  //   },
  //   scales: {
  //     // y: {
  //     //   min: 0,
  //     //   max: 6,
  //     // },
  //   },
  // };

  socket.on("start_multiplier_count", function (data) {
    setGlobalTimeNow(Date.now());
    setLiveMultiplierSwitch(true);
  });

  socket.on("stop_multiplier_count", function (data) {
    setLiveMultiplier(data);
    setLiveMultiplierSwitch(false);

    setBetActive(false);
  });
  socket.on("start_betting_phase", function (data) {
    setGlobalTimeNow(Date.now());
    setLiveMultiplier("Starting...");
    setbBettingPhase(true);
    setLiveBettingTable(null);
    setHookToNextRoundBet(true);
    retrieve_active_bettors_list();

    multiplierCount.current = [];
    timeCount_xaxis.current = [];
  });

  // useEffect(() => {
  //   if (betActive && autoPayoutMultiplier <= liveMultiplier) {
  //     userData.balance += betAmount * autoPayoutMultiplier;
  //     auto_cashout_early();
  //     setBetActive(false);
  //   }
  // }, [liveMultiplier]);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.on("subscribeToRandomNumbers", (value) => {
      console.log(value);
      setRandomNumber(value);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  ///// CHART useEffect

  useEffect(() => {
    let gameCounter = null;
    if (liveMultiplierSwitch) {
      setLiveMultiplier("1.00");

      gameCounter = setInterval(() => {
        let time_elapsed = (Date.now() - globalTimeNow) / 1000.0;
        setGamePhaseTimeElapsed(time_elapsed);
        setLiveMultiplier((1.0024 * Math.pow(1.0718, time_elapsed)).toFixed(2));

        if (multiplierCount.current.length < 1) {
          multiplierCount.current = multiplierCount.current.concat([1]);
          timeCount_xaxis.current = timeCount_xaxis.current.concat([0]);
        }
        if (realCounter_yaxis.current % 5 == 0) {
          multiplierCount.current = multiplierCount.current.concat([
            (1.0024 * Math.pow(1.0718, time_elapsed)).toFixed(2),
          ]);
          timeCount_xaxis.current = timeCount_xaxis.current.concat([
            time_elapsed,
          ]);
        }
        realCounter_yaxis.current += 1;
      }, 1);
    }
    return () => {
      clearInterval(gameCounter);
    };
  }, [liveMultiplierSwitch]);

  useEffect(() => {
    let bettingInterval = null;

    if (bBettingPhase) {
      bettingInterval = setInterval(() => {
        let time_elapsed = (Date.now() - globalTimeNow) / 1000.0;
        let time_remaining = (5 - time_elapsed).toFixed(2);
        setBettingPhaseTime(time_remaining);
        if (time_remaining < 0) {
          setbBettingPhase(false);
        }
      }, 10);
    }
    return () => {
      clearInterval(bettingInterval);
      setBettingPhaseTime("Starting...");
    };
  }, [bBettingPhase]);

  useEffect(() => {
    const temp_interval = setInterval(() => {
      setChartSwitch(false);
      sendToChart();
    }, 1);

    return () => {
      clearInterval(temp_interval);
      setChartSwitch(true);
    };
  }, [chartSwitch]);

  // Chart Data

  const sendToChart = () => {
    setChartData({
      labels: timeCount_xaxis.current,

      datasets: [
        {
          data: multiplierCount.current,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          color: "rgba(255, 255, 255,1)",

          pointRadius: 0,
          borderDash: [35, 5],
          lineTension: 0.1,
        },
      ],
    });
    setChartOptions({
      events: [],
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0.1,
        },
      },
      scales: {
        yAxes: {
          type: "linear",

          title: {
            display: false,
            text: "value",
          },
          min: 1,
          max: liveMultiplier > 2 ? liveMultiplier : 2,
          ticks: {
            color: "rgba(255, 255, 255,1)",
            maxTicksLimit: 5,
            callback: function (value, index, values) {
              if (value % 0.5 == 0) return parseFloat(value).toFixed(2);
            },
          },
          grid: {
            display: true,
            color: "white",
          },
        },
        xAxes: {
          type: "linear",
          title: {
            display: false,
            text: "value",
          },
          max: gamePhaseTimeElapsed > 2 ? gamePhaseTimeElapsed : 2,
          ticks: {
            color: "rgba(255, 255, 255,1)",

            maxTicksLimit: 5,
            callback: function (value, index, values) {
              if (gamePhaseTimeElapsed < 10) {
                if (value % 1 == 0) return value;
              } else {
                if (value % 10 == 0) return value;
              }
            },
          },
          grid: {
            display: true,
            color: "white",
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
      animation: {
        x: {
          type: "number",
          easing: "linear",
          duration: 0,
          from: 5,
          delay: 0,
        },
        y: {
          type: "number",
          easing: "linear",
          duration: 0,
          from: 5,
          delay: 0,
        },
        loop: true,
      },
    });
  };

  return (
    <div>
      {/* <p>Random Number: {randomNumber}</p> */}
      <div className="grid-elements">
        {
          <div className="effects-box">
            <div
              className="basically-the-graph"
              style={{
                height: "40%",
                width: "30%",
                position: "absolute",
                top: "12%",
                left: "1.5%",
              }}
            >
              {chartData ? (
                <SomeChart chartData={chartData} chartOptions={chartOptions} />
              ) : (
                ""
              )}
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: 12,
                top: "24%",
                left: "15%",
              }}
            >
              {(() => {
                if (bBettingPhase) {
                  return <h1>{bettingPhaseTime}</h1>;
                } else {
                  return (
                    <h1
                      className={` ${
                        !liveMultiplierSwitch &&
                        liveMultiplier !== "Starting..." &&
                        liveMultiplier !== "CONNECTING..."
                          ? "multipler_crash_value_message"
                          : ""
                      }`}
                    >
                      {liveMultiplier !== "Starting..."
                        ? liveMultiplier + "x"
                        : "Starting..."}
                    </h1>
                  );
                }
              })()}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
