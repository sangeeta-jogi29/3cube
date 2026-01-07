import { motion } from "framer-motion";
import StatsCounter from "../../components/landing_page/StatsCounter";

import awarenessImg from "../../assets/stats/awareness.jpg";
import instructionsImg from "../../assets/stats/instructions.jpg";
import questionsImg from "../../assets/stats/questions.jpg";
import processImg from "../../assets/stats/process.jpg";

// Key operational metrics
const operationalMetrics = [
  { 
    title: "Global Reach", 
    value: "40+", 
    unit: "Countries",
    img: awarenessImg,
    description: "International operations"
  },
  { 
    title: "Compliance Checks", 
    value: "305+", 
    unit: "Inspections",
    img: instructionsImg,
    description: "Quality assurance"
  },
  { 
    title: "Risk Alerts", 
    value: "2,700+", 
    unit: "Notifications",
    img: questionsImg,
    description: "Proactive monitoring"
  },
  { 
    title: "Operational Partners", 
    value: "10+", 
    unit: "Strategic Alliances",
    img: processImg,
    description: "Industry collaboration"
  },
];

// Mobile-friendly animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function StatsSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#cfeeff] via-[#e7f7ff] to-[#cfeeff] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#0a70af]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0a70af]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
         <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/60 border border-[#0a70af]/20 rounded-full backdrop-blur-sm shadow-sm"
          >
            <span className="w-2 h-2 bg-[#0a70af] rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0a70af] uppercase">
              Performance Dashboard
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0a70af] mb-3 sm:mb-4 leading-tight px-4"
          >
            Powering Global
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a70af] via-[#0856a0] to-[#0a70af] animate-gradient"> Maritime Operations</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 text-[#0a70af]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4"
          >
            Real-time insights into our worldwide operational footprint and performance excellence
          </motion.p>
        </motion.div>

        {/* Primary KPI Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <StatsCounter />
        </motion.div>

        {/* Operational Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {operationalMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#0a70af]/10 hover:border-[#0a70af]/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#cfeeff]/0 to-[#0a70af]/0 group-hover:from-[#cfeeff]/30 group-hover:to-[#0a70af]/5 transition-all duration-500"></div>
                
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0a70af] to-[#0856a0] opacity-0 group-hover:opacity-10 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>

                <div className="relative z-10">
                  {/* Icon with floating animation */}
                  <motion.div 
                    animate={floatAnimation}
                    className="mb-6 flex items-center justify-center"
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#cfeeff] to-[#0a70af]/20 rounded-2xl blur-md opacity-60"></div>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-2 ring-[#0a70af]/30 group-hover:ring-[#0a70af]/50 transition-all duration-300">
                        <img
                          src={metric.img}
                          alt={metric.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Value with counter animation */}
                  <motion.div 
                    className="mb-3 text-center"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0a70af] to-[#0856a0] mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#0a70af]/70 font-medium uppercase tracking-wider">
                      {metric.unit}
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#0a70af]/30 to-transparent mx-auto mb-4"></div>

                  {/* Title & Description */}
                  <div className="text-center space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#0a70af]">
                      {metric.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0a70af]/60 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0a70af] via-[#0856a0] to-[#0a70af]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-20 h-px bg-gradient-to-r from-transparent via-[#0a70af]/30 to-transparent"
        ></motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}