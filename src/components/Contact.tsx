import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'encrypting' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Web Development',
    'Video Editing',
    'Graphic Design',
    'Brand / Creative Project',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playTick();

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');

    const subject = encodeURIComponent(`Portfolio enquiry — ${formData.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\n\n${formData.message}`
    );

    window.location.href = `mailto:jyothirgosh2008@gmail.com?subject=${subject}&body=${body}`;
    soundManager.playWhoosh();
    setStatus('sent');
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Development',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#050505] py-28 px-6 sm:px-8 border-t border-white/5"
    >
      {/* Background ambient crimson spot */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[550px] w-[550px] rounded-full bg-[#8B0000]/15 blur-[180px]" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C1121F] font-bold">07 //</span>
            <span className="font-mono text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
              COMMUNICATION CHANNEL
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">DISPATCH PORTAL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Call to Action */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
                HAVE AN IDEA?
              </h2>
              <p className="mt-4 text-xl sm:text-2xl font-light text-zinc-300">
                Let's turn it into something real.
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#A0A0A0]">
              Whether you are architecting a next-generation web application, building a website, editing digital content, or bringing an ambitious creative concept to life, I am open to suitable projects and collaborations.
            </p>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#C1121F]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">DIRECT DISPATCH</div>
                  <a href="mailto:jyothirgosh2008@gmail.com" className="hover:text-[#C1121F] transition-colors font-mono">
                    jyothirgosh2008@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#C1121F]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">HEADQUARTERS</div>
                  <div className="font-mono">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-emerald-400">
                <ShieldCheck size={14} />
                <span>DIRECT CONTACT CHANNEL</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 bg-[#0B0B0C]/90 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Form glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C1121F] to-transparent" />

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    EMAIL DRAFT OPENED
                  </h3>
                  <p className="text-sm text-[#A0A0A0] max-w-md">
                    Your email app should now open with the message addressed to Jyothir Gosh. Send it from your email app to complete the enquiry.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs font-mono text-white uppercase hover:bg-white/10 transition-colors"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {errorMessage && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs font-mono text-rose-400">
                      // ERROR: {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Alex Vance"
                        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C1121F] focus:outline-none focus:ring-1 focus:ring-[#C1121F] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="alex@enterprise.com"
                        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C1121F] focus:outline-none focus:ring-1 focus:ring-[#C1121F] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      PROJECT CLASSIFICATION
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white focus:border-[#C1121F] focus:outline-none focus:ring-1 focus:ring-[#C1121F] transition-all"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#0B0B0C] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      MESSAGE OR BRIEF *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Outline project objectives, timeline expectations, or security requirements..."
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#C1121F] focus:outline-none focus:ring-1 focus:ring-[#C1121F] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'encrypting'}
                    className="group flex items-center justify-center gap-3 rounded-xl bg-[#C1121F] py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#8B0000] hover:shadow-[0_0_25px_rgba(193,18,31,0.5)] disabled:opacity-50"
                    data-cursor="TRANSMIT"
                  >
                    {status === 'encrypting' ? (
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                        ENCRYPTING PACKET & TRANSMITTING...
                      </span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
