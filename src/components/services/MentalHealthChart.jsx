import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MentalHealthChart = () => {
  const mainData = [28, 24, 48];

  const doughnutData = {
    labels: ["Denial", "Bargaining", "Others"],
    datasets: [
      {
        data: mainData,
        backgroundColor: ["#dc2626", "#fbbf24", "#3b82f6"], // Red, Amber, Blue
        borderWidth: 1,
      },
    ],
  };

  const concernsData = {
  labels: ["Anxiety", "Stress", "Low Mood", "Others"],
  datasets: [
    {
      data: [37, 24, 13, 26],
      backgroundColor: [
        "#3b82f6", // Bright Blue – Anxiety
        "#fb923c", // Bright Orange – Stress
        "#a855f7", // Bright Purple – Low Mood
        "#f43f5e", // Bright Pink-Red – Others
      ],
      borderWidth: 1,
    },
  ],
};

const triggersData = {
  labels: [
    "Conflict with Other Crew",
    "Physical Health Related",
    "Workload Related",
    "Family & Relationships",
    "Others",
  ],
  datasets: [
    {
      data: [15, 13, 13, 37, 22],
      backgroundColor: [
        "#06b6d4", // Bright Cyan – Conflict
        "#facc15", // Bright Yellow – Physical Health
        "#8b5cf6", // Bright Violet – Workload
        "#f43f5e", // Bright Rose – Family
        "#10b981", // Bright Green – Others
      ],
      borderWidth: 1,
    },
  ],
};

  const doughnutOptions = {
    responsive: true,
    cutout: "60%",
    animation: { duration: 5000 },
    plugins: { legend: { display: false } },
  };

  const pieOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Chart Section */}
      <div className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-[#0a70af] text-center mb-4">
          <i className="fas fa-chart-pie mr-2"></i>
          Mental Health Perceptions
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          A significant portion of maritime professionals are still in the early psychological phases of mental health awareness.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-60 h-60">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>

          <div className="space-y-4">
            {[
              { label: "Denial", value: 28, color: "#dc2626", desc: "Ignoring the issue" },
              { label: "Bargaining", value: 24, color: "#fbbf24", desc: "Minimizing the concern" },
              { label: "Others", value: 48, color: "#3b82f6", desc: "Neutral/other responses" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-4 h-4 mt-1 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div>
                  <p className="text-gray-800 font-semibold">
                    {item.label} – <span className="text-[#0a70af]">{item.value}%</span>
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Concerns and Triggers Section */}
      {/* Highlight box */}
    <div className="bg-white border-l-4 border-[#0a70af] px-6 py-6 max-w-2xl mx-auto mt-12 rounded-xl shadow-md flex items-start gap-4">
  <div className="text-[#0a70af] text-3xl">
    <i className="fas fa-comments"></i>
  </div>
  <p className="text-gray-800 text-lg leading-relaxed">
    Early intervention and focused counselling leads to most{" "}
    <span className="text-2xl font-bold text-[#0a70af]">Psychological cases</span>{" "}
    being successfully managed onboard.
  </p>
</div>

      <div className="grid md:grid-cols-2 gap-8 mt-5">
        
        {/* Key Concerns */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold text-[#0a70af] mb-4">
            <i className="fas fa-heartbeat mr-2"></i> Key Mental Health Concerns
          </h3>
          <div className="flex items-start gap-6">
            <div className="w-40 h-40">
              <Pie data={concernsData} options={pieOptions} />
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                { label: "Anxiety", value: 37, color: "#3b82f6" },
                { label: "Stress", value: 24, color: "#fb923c" },
                { label: "Low Mood", value: 13, color: "#a855f7" },
                { label: "Others", value: 26, color: "#f43f5e" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <div className="w-3 h-3 mt-1 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <p className="font-medium text-gray-800">
                    {item.label} – <span className="text-[#0a70af]">{item.value}%</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Triggers */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold text-[#0a70af] mb-4">
            <i className="fas fa-bolt mr-2"></i> Key Triggers
          </h3>
          <div className="flex items-start gap-6">
            <div className="w-40 h-40">
              <Pie data={triggersData} options={pieOptions} />
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                { label: "Conflict with Other Crew", value: 15, color: "#06b6d4" },
                { label: "Physical Health Related", value: 13, color: "#facc15" },
                { label: "Workload Related", value: 13, color: "#8b5cf6" },
                { label: "family & Relationships", value: 37, color: "#f43f5e" },
                { label: "Others", value: 22, color: "#10b981" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <div className="w-3 h-3 mt-1 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <p className="font-medium text-gray-800">
                    {item.label} – <span className="text-[#0a70af]">{item.value}%</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthChart;
