import React from "react";
import { Mail, Moon, Sun, Phone} from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

function Navigation({ darkMode, setDarkMode, activeTab, setActiveTab }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "summary", label: "Professional Summary" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Tech Blog" },
    { id: "education", label: "Education & Training" },
    { id: "contact", label: "Contact" },
  ];

  const navigate = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${
      darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-slate-200"
    } transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button className="flex items-center gap-3 cursor-pointer text-left" onClick={() => navigate("home")}>
            <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20">
              EN
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block leading-tight">ERWIN NICOLAS</span>
              <span className="text-xs text-emerald-500 font-semibold uppercase tracking-wider block">
                Full-Stack & IT Specialist
              </span>
            </div>
          </button>

          <div className="hidden xl:flex items-center space-x-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : darkMode
                      ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "bg-slate-800 text-amber-400 hover:bg-slate-700" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href={`tel:${RESUME_DATA.phone}`}
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Erwin</span>
            </a>
          </div>
        </div>
      </div>

      <div className="xl:hidden flex overflow-x-auto px-4 py-2 gap-2 border-t border-slate-800/40 bg-slate-900/40">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap font-medium ${
              activeTab === item.id
                ? "bg-emerald-500 text-slate-950 font-bold"
                : darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}


export default Navigation;