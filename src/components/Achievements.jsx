import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import {
  ShieldCheck,
  HeartPulse,
  Clock,
  Ship,
  Activity,
  Award,
} from "lucide-react";

const stats = [
  { value: "350,000+", label: "Medical Cases Handled", icon: HeartPulse },
  { value: "2,500+", label: "Vessels Covered", icon: Ship },
  { value: "7 min", label: "Avg Response Time", icon: Clock },
  { value: "98.5%", label: "Success Rate", icon: ShieldCheck },
];

const kpis = [
  {
    title: "Emergency Medical Support",
    desc: "24/7 global response & onboard care",
    icon: Activity,
  },
  {
    title: "Crew Wellness Programs",
    desc: "Preventive & mental healthcare",
    icon: HeartPulse,
  },
  {
    title: "Offshore Medical Facilities",
    desc: "On-site clinics & rapid evacuation",
    icon: Ship,
  },
  {
    title: "Certified Expertise",
    desc: "IMO & ISO compliant operations",
    icon: Award,
  },
];

const milestones = [
  { year: "2010", title: "Company Founded" },
  { year: "2014", title: "Emergency Network Established" },
  { year: "2018", title: "Telemedicine Platform Launched" },
  { year: "2023", title: "AI Diagnostics Introduced" },
];

const Achievements = () => {
  return (
    <>
      <Header />

      <section className="bg-[#eef5fb] px-6 py-10 space-y-14">

        {/* HERO + STATS */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* HERO */}
          <div className="lg:col-span-2 bg-gradient-to-r from-[#0a70af] to-[#0e8bdc] rounded-2xl p-10 text-white relative overflow-hidden shadow-lg">
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-3">
              Protecting Health <br /> Across the Oceans
            </h1>
            <p className="text-sm lg:text-base opacity-90 max-w-md mb-5">
              Global maritime medical solutions & emergency healthcare support
              for seafarers worldwide.
            </p>

            <button className="mt-5 bg-white text-[#0a70af] px-6 py-3 rounded-full text-sm font-medium shadow hover:shadow-md transition">
              Learn More About Our Impact
            </button>

            <div className="absolute right-6 bottom-6 opacity-20 text-white text-7xl animate-pulse">
              ✚
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                  <div className="bg-[#0a70af]/10 p-3 rounded-full mb-2">
                    <Icon className="text-[#0a70af] w-6 h-6" />
                  </div>
                  <p className="text-[#0a70af] text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* KPI SECTION */}
        <div>
          <h2 className="text-lg font-semibold text-[#0a70af] mb-6">
            Excellence in Maritime Healthcare
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-1 cursor-pointer"
                >
                  <div className="bg-[#0a70af]/10 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                    <Icon className="text-[#0a70af] w-5 h-5" />
                  </div>
                  <h3 className="font-medium text-sm text-[#0a70af]">{kpi.title}</h3>
                  <p className="text-xs text-gray-500 mt-2">{kpi.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MILESTONES + TRUST */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* TIMELINE */}
<div className="bg-white rounded-2xl p-6 shadow-sm">
  <h3 className="font-semibold text-[#0a70af] mb-5">
    Milestones & Achievements
  </h3>

  <div className="relative border-l-3 border-[#0a70af]/30 ml-4 space-y-6">
    {milestones.map((m, i) => (
      <div key={i} className="flex items-start gap-4 relative">
        {/* Dot */}
        <span className="w-4 h-4 bg-[#0a70af] rounded-full absolute -left-[11px] top-1 animate-pulse" />

        {/* Right content container */}
        <div className="flex flex-col">
          {/* Date */}
          <span className="text-sm font-semibold text-[#0a70af]">{m.year}</span>
          {/* Title */}
          <p className="text-sm text-gray-600">{m.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* TRUST / PROOF */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-[#0a70af] mb-4">
              Trusted Proof Globally
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Response Time Efficiency</p>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-[#0a70af] to-[#0e8bdc] rounded-full transition-all" />
                </div>
                <p className="text-xs mt-1 text-gray-400">95% cases within 10 minutes</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                <span className="hover:text-[#0e8bdc] transition">ISO Certified</span>
                <span className="hover:text-[#0e8bdc] transition">IMO Approved</span>
                <span className="hover:text-[#0e8bdc] transition">Maritime Authority Verified</span>
                <span className="hover:text-[#0e8bdc] transition">Global Seaways Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0a70af] to-[#0e8bdc] rounded-2xl p-10 text-center text-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Ensure Unwavering Crew Health</h2>
          <p className="text-sm opacity-90 mb-6">
            Connect with our maritime medical experts today
          </p>

          <div className="flex justify-center gap-5">
            <button className="bg-white text-[#0a70af] px-8 py-3 rounded-full text-sm font-medium shadow hover:shadow-md transition">
              Request a Quote
            </button>
            <button className="border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[#0a70af] transition">
              Contact Us
            </button>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Achievements;
