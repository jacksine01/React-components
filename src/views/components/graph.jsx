import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import io from "socket.io-client";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "../index.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ENDPOINT = "http://localhost:8001";

export function Graph() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: "black",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  });

  const [showText, setShowText] = useState(false);

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        ticks: {
          callback: function (value) {
            if (value % 2 === 0) {
              return value;
            } else {
              return "";
            }
          },
        },
      },
      y: {
        ticks: {
          stepSize: 0.2,
          max: 100,
          callback: function (value) {
            if (value <= 2) {
              return value + "x";
            } else if (value % 1 === 0) {
              return value + "x";
            } else {
              return "";
            }
          },
        },
      },
    },
  };

  useEffect(() => {
    const socket = io(ENDPOINT);

    let currentValue = 0;
    let interval;
    let stopValue = Math.random() * 10;

    const updateChartData = () => {
      if (currentValue <= 10) {
        setChartData((prevData) => {
          const newData = {
            labels: [...prevData.labels, currentValue],
            datasets: [
              {
                data: [...prevData.datasets[0].data, currentValue],
                borderColor: "black",
                borderWidth: 4,
                pointRadius: 0,
              },
            ],
          };
          return newData;
        });
        currentValue++;

        if (currentValue >= stopValue) {
          clearInterval(interval);
          setShowText(true);
          setChartData((prevData) => {
            const newData = {
              ...prevData,
              datasets: prevData.datasets.map((dataset) => ({
                ...dataset,
                borderColor: "white",
              })),
            };
            return newData;
          });
          setTimeout(() => {
            setShowText(false);
            setChartData((prevData) => {
              const newData = {
                ...prevData,
                datasets: prevData.datasets.map((dataset) => ({
                  ...dataset,
                  borderColor: "black",
                })),
              };
              return newData;
            });
            setChartData({
              labels: [],
              datasets: [
                {
                  data: [],
                  borderColor: "black",
                  borderWidth: 2,
                  fill: false,
                },
              ],
            });
            currentValue = 0;
            interval = setInterval(updateChartData, 500);
            stopValue = Math.random() * 10;
          }, 3000);
        }
      } else {
        clearInterval(interval);
      }
    };

    interval = setInterval(updateChartData, 500);

    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <div style={{ position: "relative", width: "530px", height: "357px" }}>
        <Line data={chartData} options={options} />
        {showText && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Starting...
          </div>
        )}
      </div>
    </div>
  );
}
