import React from "react";

import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-moment";

//--------------------------------------------------------------------------------------------------------------
function SomeChart({ chartData, chartOptions }) {
  return (
    <>
      <div>
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default SomeChart;
