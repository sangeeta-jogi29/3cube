import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WellnessBarChart = () => {
  const labels = [
    "Muscle",
    "Digestive",
    "Skin",
    "Dehydration",
    "Attention & Energy",
    "Mood & Interest",
    "Sleep & Eating",
    "Anxiety",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "% Concern",
        data: [16, 13, 14, 15, 12, 11, 9, 8],
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#0a70af");
          gradient.addColorStop(1, "#68b6e8");
          return gradient;
        },
        hoverBackgroundColor: "#0a70af",
        borderRadius: 12,
        barThickness: 36,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
    plugins: {
      tooltip: {
        backgroundColor: "#0a70af",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (ctx) => `${ctx.parsed.y}% reported`,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: {
          color: "#0a70af",
          font: { size: 14, weight: "bold" },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          color: "#64748b",
          font: { size: 13 },
          callback: (value) => `${value}%`,
        },
        grid: {
          color: "#e2e8f0",
          borderDash: [4, 4],
        },
      },
    },
  };

  return (
    <>
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a70af] tracking-tight mb-3">
          Seafarers’ Health Factors Overview
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          % of Seafarers who reported concerns on key health categories
        </p>
      </div>

      {/* Chart */}
      <div className="relative px-2 md:px-10">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default WellnessBarChart;
