import React from "react";
import { BookOpen, Code, Mail, MapPin, Phone, Terminal } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

function Hero({ darkMode, navigate }) {
  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800/40">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Freelance & IT Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Web Solutions</span> & IT Infrastructure
            </h1>

            <p className={`text-lg sm:text-xl ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
              Hi, I'm <strong className={darkMode ? "text-white" : "text-slate-900"}>Erwin Butch D. Nicolas</strong>. I blend 14+ years of hands-on Web Development (ReactJS, Vue.js, PHP, MySQL) with Enterprise Systems Administration (Proxmox, TrueNAS, pfSense, Linux).
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate("projects")}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
              >
                <Code className="w-5 h-5" />
                View Portfolio Projects
              </button>

              <button
                onClick={() => navigate("blog")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all hover:scale-105 ${
                  darkMode
                    ? "border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200"
                    : "border-slate-300 bg-white hover:bg-slate-100 text-slate-800"
                }`}
              >
                <BookOpen className="w-5 h-5 text-emerald-400" />
                Read Tech Blog
              </button>

              <a href={`mailto:${RESUME_DATA.email}`} className={`p-3 rounded-xl border transition-colors ${
                darkMode ? "border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300" : "border-slate-200 bg-white hover:bg-slate-100 text-slate-700"
              }`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-400">
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /><span>Parañaque City, Metro Manila, PH</span></div>
              <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-emerald-400" /><span>{RESUME_DATA.phone}</span></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden ${
              darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-400">erwin_stack_overview.json</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {RESUME_DATA.stats.map((stat, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${
                    darkMode ? "bg-slate-950/60 border-slate-800/80" : "bg-slate-50 border-slate-200"
                  }`}>
                    <div className="text-2xl font-black text-emerald-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Current Engagement</div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <Terminal className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div><div className="text-sm font-semibold">Freelance Web Developer</div><div className="text-xs text-slate-400">BearNCo., Australia (Jan 2024 – Present)</div></div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <BookOpen className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div><div className="text-sm font-semibold">Part-Time Faculty / IT Instructor</div><div className="text-xs text-slate-400">Olivarez College (Aug 2024 – Present)</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
