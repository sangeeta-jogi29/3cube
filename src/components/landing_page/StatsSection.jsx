import { useEffect } from "react";
import { motion } from "framer-motion";

import awarenessImg from "../../assets/stats/awareness.jpg";
import instructionsImg from "../../assets/stats/instructions.jpg";
import questionsImg from "../../assets/stats/questions.jpg";
import processImg from "../../assets/stats/process.jpg";
import feedbackBg from "../../assets/stats/feedback1.jpg";

import "../../styles/feedbackSlider.css";
import StatsCounter from "../../components/landing_page/StatsCounter";

const statsData = [
  { title: "Data 1", value: "2,700+", img: awarenessImg },
  { title: "Data 2", value: "10", img: instructionsImg },
  { title: "Data 3", value: "305+", img: questionsImg },
  { title: "Data 4", value: "$100B", img: processImg },
  { title: "Data 5", value: "$13.3B", img: feedbackBg },
  { title: "Data 6", value: "3", img: awarenessImg },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StatsFeedbackChart() {
  useEffect(() => {}, []);

  return (
    <section className="bg-[#f4f8fc] px-4 sm:px-6 py-14">
      
      {/* ===== SOFT CONTAINER (NOT HEAVY BOX) ===== */}
      <div className="max-w-7xl mx-auto relative">

        {/* subtle background layer */}
        <div className="absolute inset-0 bg-white/70 rounded-2xl" />

        <div className="relative px-6 sm:px-10 py-12 sm:py-14">

          {/* ===== HEADING (UNCHANGED, REFINED) ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto mb-14"
          >
            {/* Desktop */}
            <div className="hidden sm:block relative h-[88px]">
              <div
                className="absolute inset-0 bg-[#0a70af]/90"
                style={{ transform: "skew(-12deg)" }}
              />
              <div
                className="relative bg-white py-4 text-center"
                style={{ transform: "skew(-12deg)" }}
              >
                <h3
                  className="text-3xl font-semibold tracking-wide text-[#0a70af]"
                  style={{ transform: "skew(12deg)" }}
                >
                  Corporate Performance & Operational Metrics
                </h3>
              </div>
            </div>

            {/* Mobile */}
            <div className="sm:hidden text-center px-2">
              <h3 className="text-xl font-semibold text-[#0a70af] leading-snug">
                Corporate Performance <br /> & Operational Metrics
              </h3>
              <div className="w-14 h-[2px] bg-[#0a70af] mx-auto mt-3 rounded-full" />
            </div>
          </motion.div>

          {/* ===== STATS COUNTER ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16"
          >
            <StatsCounter />
          </motion.div>

          {/* ===== POLYGON STATS (REFINED) ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {statsData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="relative flex flex-col items-center"
              >
                {/* ICON (better proportion) */}
                <div className="w-14 h-14 rounded-full bg-[#0a70af] flex items-center justify-center z-10 shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-9 h-9 object-cover rounded-full"
                  />
                </div>

                {/* POLYGON (lighter & smaller) */}
                <div className="relative w-full -mt-4">
                  <svg
                    viewBox="0 0 300 160"
                    className="w-full h-[120px]"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,45 150,5 300,45 300,160 0,160"
                      fill="none"
                      stroke="#0a70af"
                      strokeWidth="1.6"
                      opacity="0.75"
                    />
                  </svg>

                  {/* TEXT */}
                  <div className="absolute top-[52px] w-full text-center">
                    <div className="text-[26px] font-semibold text-[#0a70af]">
                      {item.value}
                    </div>
                    <div className="text-sm mt-1 text-[#1e3a5f] tracking-wide">
                      {item.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
