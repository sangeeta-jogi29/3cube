import { motion } from "framer-motion";
import StatsCounter from "../../components/landing_page/StatsCounter";

import awarenessImg from "../../assets/stats/awareness.jpg";
import instructionsImg from "../../assets/stats/instructions.jpg";
import questionsImg from "../../assets/stats/questions.jpg";
import processImg from "../../assets/stats/process.jpg";

// Secondary stats for cards
const secondaryStats = [
  { title: "Global Reach", value: "40+ Countries", img: awarenessImg },
  { title: "Compliance Checks", value: "305+", img: instructionsImg },
  { title: "Risk Alerts", value: "2,700+", img: questionsImg },
  { title: "Operational Partners", value: "10+", img: processImg },
];

// Hero KPI numbers
const heroKPIValues = [2400, 32900]; // Vessels Subscribed, Cases Attended

// Fade animation for sections
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StatsSection() {
  const svgHeight = 200;
  const maxKPI = Math.max(...heroKPIValues);
  const padding = 20;

  // Calculate points for line graph
  const points = heroKPIValues.map((v, i) => {
    const x = padding + (i * (1440 - padding * 2)) / (heroKPIValues.length - 1);
    const y = svgHeight - (v / maxKPI) * (svgHeight - padding * 2) - padding;
    return [x, y];
  });

  // Build smooth cubic Bezier path
  const buildPath = (pts) => {
    if (!pts.length) return "";
    let d = `M ${pts[0][0]},${pts[0][1]} `;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, y0] = pts[i];
      const [x1, y1] = pts[i + 1];
      const cx = (x0 + x1) / 2;
      d += `C ${cx},${y0} ${cx},${y1} ${x1},${y1} `;
    }
    return d;
  };

  const pathD = buildPath(points);

  return (
    <section className="relative bg-[#f4f8fc] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BACKGROUND LINE GRAPH */}
      

      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-20 px-4 sm:px-0"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0a70af] to-[#046d97] relative inline-block">
            Operational Scale & Performance
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-[#0a70af] to-[#046d97] rounded-full opacity-70 animate-pulse"></span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-[#1e3a5f] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            A snapshot of our global operational strength, execution scale, and industry trust.
          </motion.p>
        </motion.div>

        {/* HERO KPIs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <StatsCounter />
        </motion.div>

        {/* SECONDARY STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {secondaryStats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="relative bg-white rounded-3xl p-8 sm:p-6 text-center shadow-md border border-[#0a70af]/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-lg sm:text-xl font-semibold text-[#0a70af]">{item.value}</div>
              <div className="mt-2 text-sm sm:text-base text-[#1e3a5f] tracking-wide">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
