import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const subject = formState.subject || "Portfolio Inquiry";
      const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      const mailtoUrl = `mailto:fidelishillary0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the visitor's mail client
      window.location.href = mailtoUrl;

      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 8000);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-mono">05 / INQUIRIES</p>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight animate-fade-in">
            Initiate Contact
          </h2>
          <p className="font-sans text-xs text-slate-400 mt-4 leading-relaxed max-w-xl mx-auto font-light">
            Recruiters, hiring managers, and academic researchers can initiate secure communication here or trace active social pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Quick Connect details */}
          <div className="col-span-1 lg:col-span-5 space-y-6 text-left">
            <h3 className="font-serif italic text-xl text-white">Let's Connect</h3>
            <p className="font-sans text-sm text-slate-400 leading-relaxed font-light">
              I am actively seeking full-time roles in <strong>IT Infrastructure Engineering</strong>, <strong>Cloud Administration</strong>, and <strong>Security Analysis (L2 Security Analyst / SecOps)</strong>.
            </p>

            <div className="space-y-4 font-sans text-sm pt-4">
              {/* Direct Email */}
              <a
                id="contact-email-link"
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#080808] border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/5 rounded-full text-white group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">Direct Email</span>
                  <span className="font-medium text-slate-200 group-hover:text-white truncate block text-xs">{personalInfo.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#080808] border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/5 rounded-full text-white group-hover:scale-105 transition-transform shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn Professional</span>
                  <span className="font-medium text-slate-200 group-hover:text-white truncate block text-xs">Fidelis Hillary Bin Leanad</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#080808] border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/5 rounded-full text-white group-hover:scale-105 transition-transform shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">GitHub Repos</span>
                  <span className="font-medium text-slate-200 group-hover:text-white truncate block text-xs">github.com/fidelishillary</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                id="contact-whatsapp-link"
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#080808] border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/5 rounded-full text-white group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">Immediate Chat</span>
                  <span className="font-medium text-slate-200 group-hover:text-white truncate block text-xs">Ping via WhatsApp</span>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="col-span-1 lg:col-span-7 rounded-2xl bg-[#080808] border border-white/5 p-6 sm:p-8 text-left">
            <h3 className="font-serif italic text-xl text-white mb-6">Send A Message</h3>
            
            <form id="recruitment-contact-form" onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-name" className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold">Your Name *</label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Recruiter"
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 focus:border-white rounded-full text-slate-200 text-xs font-sans focus:outline-none placeholder:text-slate-600 font-light"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-email" className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold">Email Address *</label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 focus:border-white rounded-full text-slate-200 text-xs font-sans focus:outline-none placeholder:text-slate-600 font-light"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="form-subject" className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold">Subject</label>
                <input
                  id="form-subject"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Opportunity: Full-time Position"
                  className="w-full px-4 py-3 bg-[#050505] border border-white/10 focus:border-white rounded-full text-slate-200 text-xs font-sans focus:outline-none placeholder:text-slate-600 font-light"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="form-message" className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold">Message Body *</label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Hi Fidelis, we reviewed your Splunk SIEM query optimization and..."
                  className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 focus:border-white rounded-2xl text-slate-200 text-xs font-sans focus:outline-none placeholder:text-slate-600 font-light resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                id="form-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3 h-3" />
                <span>{isSubmitting ? "Transmitting Packet..." : "Transmit Message"}</span>
              </button>

              {/* Success alert block */}
              {isSuccess && (
                <div id="form-success-alert" className="p-4 rounded-xl border border-white/15 bg-white/5 text-white font-sans text-xs flex flex-col space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 shrink-0 text-white" />
                    <span className="font-semibold">Redirecting to Mail Client...</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-light">
                    We are launching your default mail client with pre-filled details to send directly to <strong>fidelishillary0@gmail.com</strong>. If your email application did not open automatically, please send your message directly to <strong>fidelishillary0@gmail.com</strong>.
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
