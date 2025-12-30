import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import subscribeImg from "../../assets/subscribe.jpeg";
import casesImg from "../../assets/cases.jpeg";

/* ============================= */
/* SINGLE KPI CARD WITH PARTICLE BURST */
/* ============================= */
const StatCard = ({ img, alt, target, duration, label, delay = 0 }) => {
  const counterRef = useRef(null);
  const [showPlus, setShowPlus] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let current = 0;
    const totalSteps = 90;
    let step = 0;

    const animate = () => {
      setShowPlus(false);
      setCompleted(false);
      setParticles([]);
      step = 0;
      current = 0;

      const update = () => {
        if (!counterRef.current) return;

        const progress = step / totalSteps;
        let eased;

        // Three phases: fast → medium → slow
        if (progress < 0.4) {
          eased = (progress / 0.4) * 0.4;
        } else if (progress < 0.8) {
          eased = 0.4 + ((progress - 0.4) / 0.4) * 0.4;
        } else {
          eased = 0.8 + Math.pow((progress - 0.8) / 0.2, 0.5) * 0.2;
        }

        current = Math.floor(eased * target);
        counterRef.current.textContent = current.toLocaleString();

        if (step < totalSteps) {
          step++;
          setTimeout(update, duration / totalSteps);
        } else {
          counterRef.current.textContent = target.toLocaleString();
          setTimeout(() => {
            setShowPlus(true);
            setCompleted(true);
            createParticles();
          }, 250);
        }
      };

      update();
    };

    const createParticles = () => {
      const newParticles = Array.from({ length: 10 }, () => ({
        id: Math.random(),
        x: Math.random() * 60 - 30, // random x offset
        y: Math.random() * -50,     // random y offset
        scale: Math.random() * 0.5 + 0.5,
        opacity: 1,
      }));
      setParticles(newParticles);

      // Fade out particles
      setTimeout(() => setParticles([]), 800);
    };

    animate();
    const interval = setInterval(animate, 300000);
    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={`
        relative bg-white/95 backdrop-blur
        rounded-3xl
        px-6 py-6
        min-w-[300px]
        flex items-center gap-5
        shadow-[0_20px_50px_rgba(10,112,175,0.15)]
        border border-[#0a70af]/10
        ${completed ? "scale-[1.015]" : ""}
        flex-col sm:flex-row
        overflow-visible
      `}
    >
      {/* Pulse Ring */}
      {completed && (
        <span className="absolute inset-0 rounded-3xl ring-2 ring-[#0a70af]/30 animate-pulseOnce pointer-events-none z-20" />
      )}

      {/* Particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: p.scale }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-2 h-2 bg-[#0a70af] rounded-full top-1/2 left-1/2 z-30"
        />
      ))}

      <img
        src={img}
        alt={alt}
        className="w-20 h-20 object-contain z-10"
        draggable="false"
      />

      <div className="flex flex-col items-center sm:items-start z-10">
        <h3 className="text-4xl sm:text-5xl font-bold text-[#0a70af] leading-none flex items-center">
          <span ref={counterRef}>0</span>
          {showPlus && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="ml-1 text-3xl align-top"
            >
              +
            </motion.span>
          )}
        </h3>
        <p className="mt-2 sm:mt-1 text-sm font-semibold text-[#1e3a5f] tracking-wide text-center sm:text-left">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

/* ============================= */
/* STATS COUNTER HERO STRIP WITH PARTICLE EFFECT */
/* ============================= */
const StatsCounter = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4 sm:px-6">
        <StatCard
          img={subscribeImg}
          alt="Vessels Subscribed"
          target={2400}
          duration={50000}
          label="Vessels Subscribed"
          delay={0.1}
        />
        <StatCard
          img={casesImg}
          alt="Cases Attended"
          target={32900}
          duration={50000}
          label="Cases Attended"
          delay={0.2}
        />
      </div>

      <style>{`
        @keyframes pulseOnce {
          0% { transform: scale(0.96); opacity: 0; }
          60% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-pulseOnce {
          animation: pulseOnce 700ms ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default StatsCounter;
