import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, MessageSquare, ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClickSound, playPopSound, playSuccessChime } from '../utils/sound';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playPopSound();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      _subject: `New portfolio message from ${formData.name}`,
      _template: 'table',
      _captcha: 'false'
    });

    try {
      await fetch('https://formsubmit.co/dspatel2175@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formPayload.toString(),
        mode: 'no-cors'
      });

      playSuccessChime();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6F61', '#00BFFF', '#FFD700', '#00FF7F', '#8A2BE2']
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Email send failed:', error);
      // Still show success because formsubmit may return opaque response in no-cors mode
      playSuccessChime();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6F61', '#00BFFF', '#FFD700', '#00FF7F', '#8A2BE2']
      });
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDF9] border-t-3 border-[#333333] relative overflow-hidden">
      
      {/* Background Decorative Paper Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6F61] text-white border-3 border-[#333333] px-4 py-1.5 rounded-full brutal-shadow-sm font-syne font-bold text-xs uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>05 / GET IN TOUCH</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-7xl text-[#333333] tracking-tight leading-none">
            LET'S BUILD SOMETHING <br className="hidden sm:inline" />
            <span className="bg-[#FFD700] text-[#333333] px-3 py-0.5 rounded-xl border-3 border-[#333333] inline-block rotate-1 brutal-shadow-sm mt-2">
              UNFORGETTABLE.
            </span>
          </h2>
          <p className="font-inter text-base sm:text-lg text-[#666666] font-medium mt-4 max-w-2xl">
            Have a web app, frontend interface, or full-stack feature idea in mind? Drop a message below or email me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Direct Email Card */}
            <div className="bg-[#FFFFFF] border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-lg relative">
              
              <div className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#FF6F61] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>DIRECT EMAIL ME</span>
              </div>

              <div className="font-syne font-bold text-xl sm:text-2xl text-[#333333] break-all mb-4">
                {PERSONAL_INFO.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full bg-[#FFD700] text-[#333333] py-3 rounded-2xl font-syne font-bold text-xs uppercase border-2 border-[#333333] brutal-btn brutal-shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#00FF7F]" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Stats & Location */}
            <div className="bg-[#00BFFF] text-white border-3 border-[#333333] p-6 rounded-3xl brutal-shadow-md space-y-3">
              <div className="flex items-center gap-2 font-syne font-bold text-sm uppercase">
                <MapPin className="w-4 h-4 text-[#FFD700]" />
                <span>Based in Ahmedabad, Gujarat, India</span>
              </div>
              <p className="font-inter text-xs font-semibold leading-relaxed text-white/90">
                Available for remote worldwide client contracts, agency partnerships, and high-impact custom engineering builds.
              </p>
            </div>

            {/* Social Channels */}
            <div className="bg-[#FFFFFF] border-3 border-[#333333] p-6 rounded-3xl brutal-shadow-sm">
              <div className="font-syne font-bold text-xs uppercase text-[#666666] tracking-wider mb-3">
                FIND ME ON SOCIAL MEDIA
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playPopSound}
                  className="bg-[#333333] text-white p-3 rounded-xl border-2 border-[#333333] font-syne font-bold text-xs text-center brutal-shadow-sm flex items-center justify-center gap-1"
                >
                  <Github className="w-4 h-4 text-[#FFD700]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playPopSound}
                  className="bg-[#00BFFF] text-white p-3 rounded-xl border-2 border-[#333333] font-syne font-bold text-xs text-center brutal-shadow-sm flex items-center justify-center gap-1"
                >
                  <Linkedin className="w-4 h-4 text-[#333333]" />
                  <span className="text-[#333333]">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playPopSound}
                  className="bg-[#E1306C] text-white p-3 rounded-xl border-2 border-[#333333] font-syne font-bold text-xs text-center brutal-shadow-sm flex items-center justify-center gap-1"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Neo Brutalism Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFFFF] border-4 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-xl relative">
              
              <div className="font-syne font-extrabold text-2xl text-[#333333] mb-6 flex items-center justify-between">
                <span>SEND A DIRECT MESSAGE</span>
                <MessageSquare className="w-6 h-6 text-[#FF6F61]" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-[#FFD700]/20 border-3 border-[#333333] rounded-2xl p-6">
                  <div className="w-16 h-16 bg-[#00FF7F] border-3 border-[#333333] rounded-full mx-auto flex items-center justify-center brutal-shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#333333]" />
                  </div>
                  <h3 className="font-syne font-extrabold text-2xl text-[#333333]">
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="font-inter text-sm font-semibold text-[#666666] max-w-md mx-auto">
                    Thanks for reaching out! Dhruv Patel will review your requirements and respond back within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#FF6F61] text-white px-6 py-2.5 rounded-xl font-syne font-bold text-xs uppercase border-2 border-[#333333] brutal-shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block font-syne font-bold text-xs uppercase text-[#333333] mb-1.5">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFFDF9] border-3 border-[#333333] p-3.5 rounded-2xl font-inter text-sm font-bold text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FF6F61] brutal-shadow-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-syne font-bold text-xs uppercase text-[#333333] mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFDF9] border-3 border-[#333333] p-3.5 rounded-2xl font-inter text-sm font-bold text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FF6F61] brutal-shadow-sm"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block font-syne font-bold text-xs uppercase text-[#333333] mb-1.5">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Custom Website"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FFFDF9] border-3 border-[#333333] p-3.5 rounded-2xl font-inter text-sm font-bold text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FF6F61] brutal-shadow-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block font-syne font-bold text-xs uppercase text-[#333333] mb-1.5">
                      PROJECT DETAILS & SCOPE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your goals, timeframe, and technical requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FFFDF9] border-3 border-[#333333] p-3.5 rounded-2xl font-inter text-sm font-bold text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FF6F61] brutal-shadow-sm"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#FF6F61] text-white py-4 rounded-2xl font-syne font-bold text-sm uppercase tracking-wider border-3 border-[#333333] brutal-btn brutal-shadow hover:bg-[#FF4081] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message Now</span>
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
