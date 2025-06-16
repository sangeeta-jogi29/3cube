import { useEffect } from "react";
import awarenessImg from "../../assets/stats/awareness.jpg";
import instructionsImg from "../../assets/stats/instructions.jpg";
import questionsImg from "../../assets/stats/questions.jpg";
import processImg from "../../assets/stats/process.jpg";
import feedbackBg from "../../assets/stats/feedback1.jpg";
import "../../styles/feedbackSlider.css";
import StatsCounter from "../../components/landing_page/StatsCounter";


const cardsData = [
  {
    percent: "88%",
    title: "Awareness Video",
    subtitle: "Engaging & Informative",
    color: "pink",
    width: "88%",
    text: "Clients felt better informed and prepared after watching our impactful awareness video.",
    img: awarenessImg,
    reviews: { stronglyAgree: 60, agree: 28, disagree: 12 },
  },
  {
    percent: "78%",
    title: "Clarity in Assessment",
    subtitle: "Easy to Understand",
    color: "yellow",
    width: "78%",
    text: "Clear, focused questions helped clients feel confident during the assessment.",
    img: instructionsImg,
    reviews: { stronglyAgree: 54, agree: 24, disagree: 22 },
  },
  {
    percent: "87%",
    title: "Client Support",
    subtitle: "Genuine Interaction",
    color: "green",
    width: "87%",
    text: "Clients valued the personal attention and support offered during every step.",
    img: questionsImg,
    reviews: { stronglyAgree: 66, agree: 21, disagree: 13 },
  },
  {
    percent: "84%",
    title: "Smooth Experience",
    subtitle: "Seamless Process",
    color: "blue",
    width: "84%",
    text: "Most clients described the overall assessment journey as smooth and convenient.",
    img: processImg,
    reviews: { stronglyAgree: 56, agree: 28, disagree: 16 },
  },
];

const barData = [
  { month: "Jan", value: 50 ,y:"Hello" },
  { month: "Feb", value: 60 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 60 },
  { month: "May", value: 40 },
  { month: "Jun", value: 50 },
];

const colorMap = {
  blue: {
    stroke: "#3b82f6",
    bar: "bg-blue-500",
    text: "text-blue-500"
  },
  green: {
    stroke: "#22c55e",
    bar: "bg-green-500",
    text: "text-green-500"
  },
  yellow: {
    stroke: "#eab308",
    bar: "bg-yellow-500",
    text: "text-yellow-500"
  },
  pink: {
    stroke: "#ec4899",
    bar: "bg-pink-500",
    text: "text-pink-500"
  }
};


export default function StatsFeedbackChart() {
  useEffect(() => {
    const container = document.getElementById("bar-container");
    if (container) {
      container.innerHTML = "";
      const maxValue = Math.max(...barData.map((d) => d.value));

      barData.forEach((data, index) => {
        const barHeight = (data.value / maxValue) * 100;

        const bar = document.createElement("div");
        bar.className = `relative w-6 ${
          index % 2 === 0
            ? "bg-gradient-to-t from-purple-300 to-purple-500"
            : "bg-gradient-to-t from-indigo-300 to-indigo-500"
        } rounded-md transition-all duration-700`;
        bar.style.height = "0%";

        setTimeout(() => {
          bar.style.height = `${barHeight}%`;
        }, 100);

        const tooltip = document.createElement("div");
        tooltip.textContent = `${data.value}`;
        tooltip.className =
          "absolute bottom-full mb-1 text-xs bg-black text-white px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none left-1/2 transform -translate-x-1/2";

        const barWrapper = document.createElement("div");
        barWrapper.className = "group flex flex-col items-center justify-end h-full";
        barWrapper.appendChild(bar);
        barWrapper.appendChild(tooltip);

        const label = document.createElement("span");
        label.textContent = data.month;
        label.className = "mt-2 text-xs text-gray-600";

        const col = document.createElement("div");
        col.className = "flex flex-col items-center h-full";
        col.appendChild(barWrapper);
        col.appendChild(label);

        container.appendChild(col);
      });
    }

    let current = 0;
    const grid = document.getElementById("feedbackGrid");

    const showCardsInPairs = async () => {
      if (!grid) return;
      grid.innerHTML = "";

      const card1 = createCard(cardsData[current]);
      const card2 = cardsData[current + 1] ? createCard(cardsData[current + 1]) : null;

      grid.appendChild(card1);
      if (card2) grid.appendChild(card2);

      await new Promise((r) => setTimeout(r, 100));
      card1.classList.add("animate-fade-in");
      card1.style.opacity = 1;
      if (card2) {
        card2.classList.add("animate-fade-in");
        card2.style.opacity = 1;
      }

      await new Promise((r) => setTimeout(r, 4500));

      card1.classList.remove("animate-fade-in");
      card1.classList.add("animate-fade-out");
      if (card2) {
        card2.classList.remove("animate-fade-in");
        card2.classList.add("animate-fade-out");
      }

      await new Promise((r) => setTimeout(r, 600));

      current = (current + 2) % cardsData.length;
      showCardsInPairs();
    };

    const createCard = (card) => {
      const div = document.createElement("div");
      div.className =
        "bg-white p-6 rounded-2xl shadow-md opacity-0 transition-all duration-500";

      div.innerHTML = `
        <img src="${card.img}" alt="${card.title}" class="sm:w-[400px] md:w-[500px] h-90 object-cover rounded-lg mb-4" />
        <div class="flex items-center justify-between mb-2">
          <span class="${colorMap[card.color].text} font-extrabold text-3xl">${card.percent}</span>
          <div class="text-right text-sm">
            <div class="font-semibold text-gray-800 text-lg">${card.title}</div>
            <div class="text-gray-500 text-lg">${card.subtitle}</div>
          </div>
        </div>
        <div class="h-2 rounded-full bg-${card.color}-100 mb-4">
          <div class="h-full ${colorMap[card.color].bar} rounded-full" style="width: ${card.width}"></div>
        </div>
        <p class="text-gray-600 text-lg mb-4">${card.text}</p>
        <div class="mt-4 space-y-1 text-sm">
          <div class="flex items-center">
            <span class="w-32 text-gray-700">Strongly Agree:</span>
            <div class="w-full h-2 bg-blue-100 rounded">
              <div class="h-full bg-blue-500 rounded" style="width: ${card.reviews.stronglyAgree}%"></div>
            </div>
            <span class="ml-2 text-blue-600 font-semibold">${card.reviews.stronglyAgree}%</span>
          </div>
          <div class="flex items-center">
            <span class="w-32 text-gray-700">Agree:</span>
            <div class="w-full h-2 bg-green-100 rounded">
              <div class="h-full bg-green-500 rounded" style="width: ${card.reviews.agree}%"></div>
            </div>
            <span class="ml-2 text-green-600 font-semibold">${card.reviews.agree}%</span>
          </div>
          <div class="flex items-center">
            <span class="w-32 text-gray-700">Disagree:</span>
            <div class="w-full h-2 bg-red-100 rounded">
              <div class="h-full bg-red-500 rounded" style="width: ${card.reviews.disagree}%"></div>
            </div>
            <span class="ml-2 text-red-600 font-semibold">${card.reviews.disagree}%</span>
          </div>
        </div>
      `;

      return div;
    };

    showCardsInPairs();
  }, []);

  return (
    <>
    {/* Polygon Divider */}
        <svg className="w-full h-16 -mt-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,100 0,0 0,100" fill="#0a70af" />
        </svg>
        
    <div className="bg-[#ecf6ff] px-4 sm:px-6 py-10">
      
      <div className="relative w-[900px] h-[100px] mx-auto mb-8">
  {/* Skewed blue background */}
  <div
    className="absolute top-0 left-0 w-[102%] h-full bg-[#0a70af] z-[1] rounded-sm"
    style={{ transform: 'skew(-20deg)' }}
  ></div>

  {/* White content with skew */}
  <div
    className="relative z-[2] bg-white text-center py-[20px] rounded-md"
    style={{ transform: 'skew(-20deg)' }}
  >
    <h3
      className="text-transparent bg-gradient-to-r from-[#0a70af] to-[#1a1a3d] bg-clip-text font-bold text-3xl sm:text-4xl leading-snug"

      style={{
        transform: 'skew(20deg)',
        fontFamily: 'Times New Roman, serif',
        margin: 0
      }}
    >
      Case Resolution & Assessment Data
    </h3>
  </div>

  {/* Bottom drop-shadow layer */}
  
</div>

        <StatsCounter />

      {/* Circular Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
  {[
    {
      value: "94%",
      color: "pink",
      title: "Cases Treated and Recovered",
      desc: "Barely any progress registered so far.",
      offset: 10,
    },
    {
      value: "89%",
      color: "yellow",
      title: "Pre Joining Assessment",
      desc: "Task almost completed successfully.",
      offset: 16,
    },
    {
      value: "98%",
      color: "green",
      title: "Candidates Fit For Sea Duty",
      desc: "Went beyond expectations!",
      offset: -8,
    },
   
  ].map((stat, idx) => (
    <div key={idx} className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="none" stroke="#d8d8f9" strokeWidth="4" />
          <circle
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={stat.offset}
            stroke={colorMap[stat.color].stroke}
            fill="none"
            cx="18"
            cy="18"
            r="16"
          />
        </svg>
        <div className={`absolute inset-0 flex items-center justify-center ${colorMap[stat.color].text} text-sm font-bold`}>
          {stat.value}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-lg mb-1">{stat.title}</h3>
        <p className="text-sm text-gray-500">{stat.desc}</p>
      </div>
    </div>
  ))}
</div>


      
            <svg class="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,100 100,0 100,100" fill="#0a70af" />
            </svg>
       
      
      {/* Feedback Cards */}
      <section className="relative mt-20">
        <div className="absolute inset-0 z-0">
          <img src={feedbackBg} alt="Feedback Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-[#1a1a3d] font-bold text-3xl sm:text-5xl mb-12 text-center leading-snug"
               style={{ fontFamily: "Times New Roman, serif" }}>
            Evidence of Excellence: Feedback Stats
          </h2>
          <div id="feedbackGrid" className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[600px]"></div>
        </div>
      </section>

      {/* Bar Chart */}
      {/* Polygon Divider */}
        <svg className="w-full h-16 -mt-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,100 0,0 0,100" fill="#0a70af" />
        </svg>




      <div className="max-w-5xl mx-auto mt-20 px-4">
        <h3 className="text-center text-2xl font-bold text-[#1a1a3d] mb-6">Any Grapgh data</h3>
        <div id="bar-container" className="grid grid-cols-6 gap-4 h-64 items-end"></div>
      </div>



    </div>
    </>
  );
}
