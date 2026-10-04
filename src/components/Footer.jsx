import React from "react";

function Footer({ darkMode }) {
  return (
    <footer className={`py-8 border-t ${
      darkMode ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-4 text-center text-xs space-y-2">
        <p>© {new Date().getFullYear()} Erwin Butch D. Nicolas. All Rights Reserved.</p>
        <p>Full-Stack Web Developer & IT Instructor | Parañaque City, Metro Manila, Philippines</p>
        <p>This website is on github repository and deployed in vercel</p>
      </div>
    </footer>
  );
}

export default Footer;
