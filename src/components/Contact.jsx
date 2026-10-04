import React from "react";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";


function Contact({ darkMode, formState, setFormState, formSubmitted, formError, handleContactSubmit }) {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Let's Build Something <span className="text-emerald-400">Great Together</span>
            </h2>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              Have a project requirement, web application idea, homelab infrastructure query, or teaching collaboration? Feel free to reach out directly.
            </p>

            <div className="space-y-4 pt-4">
              {[
                [MapPin, "Location", RESUME_DATA.location],
                [Phone, "Phone / Mobile", RESUME_DATA.phone],
                [Mail, "Email Address", RESUME_DATA.email],
              ].map(([Icon, label, value]) => (
                <div key={label} className={`p-4 rounded-xl border flex items-center gap-4 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <Icon className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div><div className="text-xs text-slate-400 font-semibold uppercase">{label}</div><div className="text-sm font-bold">{value}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleContactSubmit} className={`p-8 rounded-2xl border ${
              darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-lg"
            }`}>
              <h3 className="text-xl font-bold mb-6">Send Erwin a Message</h3>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">Thank you! Your message has been simulated and sent successfully.</span>
                </div>
              )}
              {formError && <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-semibold">{formError}</div>}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  ["name", "Your Name *", "text", "e.g. Maria Santos"],
                  ["email", "Your Email *", "email", "e.g. maria@example.com"],
                ].map(([key, label, type, placeholder]) => (
                  <div key={key}>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">{label}</label>
                    <input type={type} value={formState[key]} name={key} onChange={(e) => setFormState({ ...formState, [key]: e.target.value })}
                      placeholder={placeholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                        darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-800"
                      }`} />
                  </div>
                ))}
              </div>

              {/* <div className="mb-4">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Subject</label>
                <input type="text" value={formState.subject} name="subject" onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Web Development Inquiry / IT Consulting"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-800"
                  }`} />
              </div> */}

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Message *</label>
                <textarea rows={4} value={formState.message} name="message" onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Detail your application project or tech support needs..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-800"
                  }`} />
              </div>
              {!formSubmitted && (
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01]">
                <Send className="w-5 h-5" /><span>Send Message</span>
              </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;