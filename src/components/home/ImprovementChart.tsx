"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Dynamically import Line to avoid SSR issues
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false, // Disable server-side rendering for this component
});

// Define chart options with TypeScript types
export const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false, // Allow the chart to resize freely
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: 14, // Default font size
          family: "Arial, sans-serif",
        },
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "Tech Skills Improvement Over 4 Years",
      font: {
        size: 18, // Default font size
        weight: "bold",
        family: "Arial, sans-serif",
      },
      color: "#2c3e50",
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
      backgroundColor: "rgba(44, 62, 80, 0.9)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "rgba(44, 62, 80, 1)",
      borderWidth: 1,
      padding: 12,
      callbacks: {
        label: (context) => {
          const techSkills: { [key: string]: string[] } = {
            "2022": ["CS50", "OOP", "HTML", "CSS"],
            "2023": [
              "JavaScript",
              "Advanced JS",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Bootstrap",
            ],
            "2024": ["React", "Tailwind", "Material UI", "Next.js", "ShadCN"],
            "2025": [
              "AWS EC2",
              "ECS",
              "CloudFront",
              "S3",
              "CI/CD",
              "SQL",
              "Strapi",
              "Sanity",
            ],
          };
          const year = context.label || "";
          const skills = techSkills[year] || [];
          return [`${year} Skills:`, ...skills.map((skill) => `- ${skill}`)];
        },
      },
      displayColors: false,
      bodyFont: {
        size: 12,
        family: "Arial, sans-serif",
      },
      titleFont: {
        size: 14,
        family: "Arial, sans-serif",
      },
    },
  },
  animation: {
    duration: 2000, // 2 seconds animation duration
    easing: "easeInOutQuad", // Smooth easing for the animation
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "Improvement Score",
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
        color: "#2c3e50",
      },
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      ticks: {
        color: "#666",
        font: {
          size: 12,
          family: "Arial, sans-serif",
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Year",
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
        color: "#2c3e50",
      },
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      ticks: {
        color: "#666",
        font: {
          size: 12,
          family: "Arial, sans-serif",
        },
      },
    },
  },
};

const labels = ["2022", "2023", "2024", "2025"];

// Define chart data with TypeScript types
export const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Self-Improvement Score",
      data: [30, 60, 70, 95], // Zigzag but ascending
      borderColor: "#FF7000", // Orange for visibility
      backgroundColor: "#ffc69a", // Lighter gradient fill
      borderWidth: 5,
      pointRadius: 5,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#FF7000",
      pointBorderWidth: 5,
      tension: 0.4, // Smooth zigzag curve
    },
  ],
};

export function ImprovementChart() {
  const [chartDimensions, setChartDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Adjust chart dimensions based on window size
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth > 900 ? 900 : window.innerWidth * 0.9; 
     
      setChartDimensions({ width, height: width * 0.6 });
    };

    updateDimensions(); 
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: `${chartDimensions.width}px`,
        height: `${chartDimensions.height}px`,
        padding: chartDimensions.width <= 640 ? "10px" : "20px",
        margin: "0 auto",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden", // Prevent overflow on mobile
      }}
    >
      <Line options={options} data={data} />
    </div>
  );
}

export default ImprovementChart;
