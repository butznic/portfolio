import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

function FeaturedProjects({ darkMode, selectedProjectCategory, setSelectedProjectCategory, setSelectedProject }) {
  const categories = ["All", "Web Applications", "Network & Systems"];
  const projects = selectedProjectCategory === "All"
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter((p) => p.category === selectedProjectCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Featured <span className="text-emerald-400">Projects Showcase</span>
            </h2>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Select web applications and custom systems developed for enterprise clients and operations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedProjectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedProjectCategory === cat
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : darkMode ? "bg-slate-900 text-slate-300 hover:bg-slate-800" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className={`p-6 rounded-2xl border flex flex-col justify-between transition-all group hover:-translate-y-1 ${
              darkMode ? "bg-slate-900/60 border-slate-800 hover:border-emerald-500/50" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{proj.category}</span>
                  <span className="text-xs text-slate-400">{proj.client}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"} line-clamp-3`}>{proj.summary}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{t}</span>
                  ))}
                </div>
                <button onClick={() => setSelectedProject(proj)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 transition-all">
                  <span>View Architecture Details</span><ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;