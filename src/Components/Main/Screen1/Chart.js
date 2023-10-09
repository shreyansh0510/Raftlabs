import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1",
      data: [20, 40, 30],
      backgroundColor: "#D2D0F6",
      borderRadius: "10",
    },
    {
      // label: "Dataset 2",
      data: [40, 60, 20],
      backgroundColor: "#6c64e3",
      borderRadius: "10",
    },
  ],
};

export default function Chart() {
  return (
    <>
      <div className="w-full">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
