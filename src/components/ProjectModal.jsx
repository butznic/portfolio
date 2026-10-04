import React from "react";
import { CheckCircle, X } from "lucide-react";

function ProjectModal({ project, darkMode, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className={`max-w-2xl w-full p-6 sm:p-8 rounded-2xl border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
        darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"
      }`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">{project.category} • {project.client}</span>
        <h3 className="text-2xl font-black mb-4">{project.title}</h3>
        <div className="space-y-4 text-sm mb-6">
          <div>
            <h4 className="font-bold text-xs uppercase text-slate-400 mb-1">Architecture Overview</h4>
            <p className={darkMode ? "text-slate-300" : "text-slate-600"}>{project.details}</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Key Accomplishments</h4>
            <ul className="space-y-1.5">{project.highlights.map((h) => <li key={h} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /><span>{h}</span></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{t}</span>)}</div>
          </div>
        </div>
        <button onClick={onClose} className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold">Close Project Overview</button>
      </div>
    </div>
  );
}


export default ProjectModal;