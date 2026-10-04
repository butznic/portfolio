import React from "react";
import { Award, GraduationCap, BookOpen, BadgeCheck } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

function EducationAcademia({ darkMode }) {
  return (
    <section id="education" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-4 h-4" /> Academic & Professional Development
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Education, <span className="text-emerald-400">Academia</span>, Certifications & Training
          </h2>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            Academic preparation, teaching credentials, technical certifications, and professional training.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400"><BookOpen className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold">Education & Academia</h3>
            </div>
            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${
                  darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <div className="text-sm text-emerald-400 font-medium mb-2">{edu.institution}</div>
                  <div className="text-xs text-slate-400 mb-1">{edu.location}</div>
                  <div className="text-xs text-slate-400">{edu.status}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400"><Award className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold">Certifications & Training</h3>
            </div>
            <div className="space-y-4">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                  darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold">{cert.title}</h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default EducationAcademia;