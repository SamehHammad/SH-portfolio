"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

const SkillsChart: React.FC = () => {
  // Register ChartJS components
  ChartJS.register(ArcElement, Tooltip, Legend);

  // Define the chart data with TypeScript types
  const data: ChartData<"pie", number[], string> = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        data: [14, 16, 2, 5, 8], // Approximate values based on the chart (adjust as needed)
        backgroundColor: [
          "#ff6384",
          "#4bc0c0",
          "#ffcd56",
          "#d3d3d3",
          "#36a2eb",
        ], // Colors matching the chart
        hoverOffset: 4,
      },
    ],
  };

  // Define the chart options with TypeScript types
  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SkillsChart;
