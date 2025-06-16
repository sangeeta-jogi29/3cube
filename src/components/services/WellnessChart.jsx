import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const WellnessChart = () => {
  const chartData = [11.57, 8.4, 5.19, 6.28, 5.7];

  const data = {
    labels: [
      "Sweating",
      "Feeling Tired or Little Energy",
      "Sleep Issues",
      "Backache",
      "Headache",
    ],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          "#34d399",
          "#60a5fa",
          "#fbbf24",
          "#fb7185",
          "#a78bfa",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%",
    animation: {
      duration: 8000,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const customLabels = [
    {
      label: "Sweating",
      percent: chartData[0],
      color: "#34d399",
      description: "Reported episodes of excessive sweating",
    },
    {
      label: "Feeling Tired or Little Energy",
      percent: chartData[1],
      color: "#60a5fa",
      description: "Low energy levels throughout the day",
    },
    {
      label: "Sleep Issues",
      percent: chartData[2],
      color: "#fbbf24",
      description: "Difficulty falling or staying asleep",
    },
    {
      label: "Backache",
      percent: chartData[3],
      color: "#fb7185",
      description: "Persistent or work-related back pain",
    },
    {
      label: "Headache",
      percent: chartData[4],
      color: "#a78bfa",
      description: "Frequent or chronic headaches reported",
    },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-[#0a70af] text-center flex items-center justify-center gap-2 font-['Inter']">
        <i className="fas fa-heartbeat text-[#0a70af]"></i>
        Reported Wellness Symptoms
      </h2>

     

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
        Survey responses highlight common physical symptoms reported by seafarers, pointing to stress-related issues and lifestyle challenges onboard.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-40">
        {/* Chart */}
        <div className="w-64 h-64">
          <Doughnut data={data} options={options} />
        </div>

        {/* Custom Legend */}
        <div className="space-y-10">
          {customLabels.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className="w-4 h-4 mt-1 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <p className="font-semibold text-gray-800">
                  {item.label} –{" "}
                  <span className="text-[#0a70af]">{item.percent}%</span>
                </p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Highlight box */}
      <div className="bg-[#e0f7ff] border-l-4 border-[#0a70af] text-[#0a70af] px-6 py-4 max-w-xl mx-auto mb-2 mt-10 rounded-md shadow-sm ]">
        <p className="text-lg font-semibold text-center">
          <i className="fas fa-user-check mr-2"></i>
          <span className="text-2xl font-bold">9.2%</span> of seafarers proactively flagged and interacted, preventing a more significant medical concern.
        </p>
      </div>
    </>
  );
};

export default WellnessChart;
