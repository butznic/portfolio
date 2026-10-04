import React from "react";
import { Code, HardDrive, Server, Shield, Video, Wrench } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

const groups = [
  ["frontend", "Front-End & Web", Code, "emerald"],
  ["backend", "Back-End & Database", Server, "teal"],
  ["systems", "Systems & DevOps", HardDrive, "cyan"],
  ["support", "IT Support & Hardware", Wrench, "amber"],
  ["multimedia", "Multimedia & Design", Video, "purple"],
];

function ProfessionalSummary({ darkMode }) {
  const iconBg = {
    emerald: "bg-emerald-500/10 text-emerald-400",
    teal: "bg-teal-500/10 text-teal-400",
    cyan: "bg-cyan-500/10 text-cyan-400",
    amber: "bg-amber-500/10 text-amber-400",
    purple: "bg-purple-500/10 text-purple-400",
  };

  return (
    <section id="summary" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Professional <span className="text-emerald-400">Summary</span>
          </h2>
          <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} text-base leading-relaxed`}>
            {RESUME_DATA.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(([key, title, Icon, accent]) => (
            <div key={key} className={`p-6 rounded-2xl border transition-all ${
              darkMode ? "bg-slate-900/60 border-slate-800 hover:border-emerald-500/40" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl ${iconBg[accent]}`}><Icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills[key].map((skill) => (
                  <span key={skill} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    darkMode ? "bg-slate-950 text-slate-300 border-slate-800" : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}

          <div className={`p-6 rounded-2xl border transition-all ${
            darkMode ? "bg-slate-900/60 border-slate-800 hover:border-emerald-500/40" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400"><Shield className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold">Certifications & Safety</h3>
            </div>
            <div className="text-xs text-slate-400 space-y-2">
              <p><strong className={darkMode ? "text-slate-200" : "text-slate-800"}>BOSH SO2 Safety Officer:</strong> Certified for workplace occupational safety management (40-hr training).</p>
              <p><strong className={darkMode ? "text-slate-200" : "text-slate-800"}>TESDA NC II:</strong> Contact Center Services & Consumer Electronics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ProfessionalSummary;