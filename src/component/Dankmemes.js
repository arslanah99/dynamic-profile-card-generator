import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Hammer from "hammerjs";
import * as Zoom from "chartjs-plugin-zoom";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [hex, setHex] = useState("#ffffff");

  const chart = () => {
    setChartData({
      labels: ["Consultor1", "Consultor2", "Consultor3", "Consultor4"],

      datasets: [
        {
          label: "# of Votes",
          data: [25, 10, 30, 20],
        },
      ],
    });
  };

  const randomizeHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <h1>Color Picker</h1>

      <div>
        <h1>{hex}</h1>
        <button onClick={randomizeHex}>Randomize</button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(hex);
          }}
        >
          Copy Color
        </button>
      </div>
    </div>
  );
};

export default Dankmemes;

{
  /* <div>
<Bar
  data={chartData}
  options={{
    responsive: true,
    title: { text: "THICCNESS SCALE", display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            max: "Consultor3",
          },
        },
      ],
    },
    pan: {
      enabled: true,
      mode: "xy",
      speed: 1,
      threshold: 1,
    },
    zoom: {
      enabled: true,
      drag: false,
      mode: "xy",
      limits: {
        max: 1,
        min: 0.5,
      },
      rangeMin: {
        x: 2,
        y: 1,
      },
      rangeMax: {
        x: 10,
        y: 150,
      },
    },
  }}
/>
</div> */
}
