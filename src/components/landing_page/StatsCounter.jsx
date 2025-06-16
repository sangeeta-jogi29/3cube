import { useEffect, useRef } from "react";
import subscribeImg from "../../assets/subscribe.jpeg";
import casesImg from "../../assets/cases.jpeg";

const StatCard = ({ img, alt, target, duration, label }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    let current = 0;
    const totalSteps = 50; // Total steps for animation
    let step = 0;

    // Ease-out timing: fast start, slow end
    const easeOutQuad = (t) => t * (2 - t);

    const update = () => {
      if (counterRef.current) {
        const progress = step / totalSteps;
        const easedProgress = easeOutQuad(progress);
        current = Math.floor(easedProgress * target);

        counterRef.current.textContent = current.toLocaleString();

        if (step < totalSteps) {
          step++;
          setTimeout(update, duration / totalSteps);
        } else {
          counterRef.current.textContent = target.toLocaleString();
          setTimeout(() => animate(), 20000); // repeat after pause
        }
      }
    };

    const animate = () => {
      current = 0;
      step = 0;
      update();
    };

    animate();

    const interval = setInterval(() => {
      animate();
    }, 480000); // every 8 minutes

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <div
      tabIndex="0"
      aria-label={`More than ${target.toLocaleString()} ${label.toLowerCase()}`}
      className="card bg-white text-blue-900 rounded-3xl p-8 shadow-lg flex flex-col items-center w-56 hover:scale-110 transition-transform cursor-default"
    >
      <img
        src={img}
        alt={alt}
        className="w-36 h-36 object-contain mb-4"
        draggable="false"
      />
      <h3 className="text-5xl font-extrabold mb-1 text-[#0a70af]">
        <span ref={counterRef}>0</span>
      </h3>
      <p className="text-lg font-semibold text-[#0a70af] text-center">
        {label}
      </p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="flex justify-center gap-8 flex-wrap py-10 bg-[#ecf6ff]">
      <StatCard
        img={subscribeImg}
        alt="Vessel Subscription Icon"
        target={2400}
        duration={48000}
        label="Vessels Subscribed"
      />
      <StatCard
        img={casesImg}
        alt="Cases Attended Icon"
        target={32900}
        duration={24000}
        label="Cases Attended"
      />
    </div>
  );
};

export default StatsCounter;
