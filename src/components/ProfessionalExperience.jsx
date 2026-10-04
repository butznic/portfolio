import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

function ProfessionalExperience({ darkMode }) {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Professional <span className="text-emerald-400">Experience</span>
          </h2>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            A track record of engineering web applications, managing server clusters, and mentoring IT students.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
          {RESUME_DATA.experience.map((item, index) => (
            <div key={item.id} className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 text-slate-950 border-4 border-slate-950 flex items-center justify-center font-bold z-10 shadow-lg">
                <Calendar className="w-5 h-5" />
              </div>

              <div className="ml-16 md:ml-0 md:w-[45%]">
                <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  darkMode ? "bg-slate-900/80 border-slate-800 hover:border-emerald-500/40" : "bg-white border-slate-200 shadow-md"
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{item.period}</span>
                    <span className="text-xs text-slate-400 font-medium">{item.location}</span>
                  </div>
                  <h3 className="text-xl font-black mb-1">{item.role}</h3>
                  <div className="text-sm font-bold text-emerald-400 mb-4">{item.company}</div>
                  <p className={`text-sm mb-4 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{item.description}</p>

                  <ul className="space-y-2 mb-6 text-xs sm:text-sm">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40">
                    {item.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-800/60 text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ProfessionalExperience;