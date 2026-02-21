import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/Header';
import { Mail, ArrowRight, Bolt, Factory, GraduationCap, Mic, Lightbulb, LineChart, Globe } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const FoundersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a090c] text-white" data-scroll-section>
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-8 px-6 sm:px-10 md:px-6 text-center relative">
        <div
          className="absolute"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #6f6dd5 0%, rgba(129,128,208,0) 60%)',
            filter: 'blur(120px)',
            opacity: 0.2,
            top: '0%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div
              className="inline-flex items-center space-x-3 text-[#7e7cd3] font-bold text-xs uppercase tracking-widest mb-4"
              variants={fadeUp}
            >
              <span className="relative w-2 h-2 rounded-full bg-[#7e7cd3]">
                <span className="absolute inset-0 rounded-full bg-[#7e7cd3] animate-ping opacity-40" />
              </span>
              <span>Leadership</span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4"
              variants={fadeUp}
            >
              The Founders.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Cards */}
      <section className="pb-20 px-6 sm:px-10 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* POUYA - Founder & CEO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="bg-[rgba(15,23,42,0.65)] backdrop-blur-[24px] border-2 border-[#7e7cd3]/30 rounded-[32px] p-6 sm:p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <motion.div className="flex items-center space-x-5 mb-6" variants={fadeUp}>
                <div className="w-24 h-24 rounded-[20px] bg-slate-800 flex items-center justify-center border-4 border-[#7e7cd3]/40 overflow-hidden shadow-2xl shrink-0">
                  <img
                    src="/founders/profile-photo.png"
                    alt="Dr. Pouya Ataei"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white leading-tight">Dr. Pouya Ataei</h2>
                  <p className="text-[#7e7cd3] font-bold text-sm uppercase tracking-[0.2em]">
                    Founder & CEO
                  </p>
                  <p className="text-slate-400 text-xs mt-1">PhD in Big Data</p>
                </div>
              </motion.div>

              {/* Google Scholar Metrics */}
              <motion.div className="grid grid-cols-3 gap-3 mb-5" variants={fadeUp}>
                {[
                  { value: '8', label: 'h-index' },
                  { value: '173+', label: 'Citations' },
                  { value: '17', label: 'Papers' },
                ].map((m) => (
                  <div key={m.label} className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-xl font-black text-white">{m.value}</div>
                    <div className="text-slate-500 text-[9px] uppercase font-bold tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Key Points */}
              <motion.div className="space-y-3 text-sm" variants={stagger}>
                {[
                  {
                    icon: <Bolt className="w-4 h-4 text-[#7e7cd3]" />,
                    text: (
                      <>
                        <strong>Principal Data Engineer @ Vector</strong> - 2.7M smart meters
                      </>
                    ),
                  },
                  {
                    icon: <Factory className="w-4 h-4 text-blue-400" />,
                    text: (
                      <>
                        <strong>Engineering Manager</strong> - 35+ engineers at Fortune 500
                      </>
                    ),
                  },
                  {
                    icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
                    text: (
                      <>
                        <strong>PhD</strong> (AUT), <strong>MSc</strong> (Staffordshire),{' '}
                        <strong>Dual BSc</strong>
                      </>
                    ),
                  },
                  {
                    icon: <Mic className="w-4 h-4 text-rose-400" />,
                    text: (
                      <>
                        <strong>Global Speaker</strong> - AMCIS, APSEC, ACIS, Geekle
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <motion.div key={i} className="flex items-center space-x-3" variants={fadeUp}>
                    <span className="w-5 shrink-0 flex justify-center">{item.icon}</span>
                    <span className="text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Reviewer Badges */}
              <motion.div className="mt-5" variants={fadeUp}>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                  Invited Reviewer
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Nature Comms', 'IEEE TKDE', 'ICSE 2025'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* MIKE - Co-Founder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="bg-[rgba(15,23,42,0.65)] backdrop-blur-[24px] border-2 border-emerald-500/30 rounded-[32px] p-6 sm:p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <motion.div className="flex items-center space-x-5 mb-6" variants={fadeUp}>
                <div className="w-24 h-24 rounded-[20px] bg-slate-800 flex items-center justify-center border-4 border-emerald-500/40 overflow-hidden shadow-2xl shrink-0">
                  <img
                    src="/founders/mike.jpeg"
                    alt="Mike Ghasemi"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white leading-tight">Mike Ghasemi</h2>
                  <p className="text-emerald-400 font-bold text-sm uppercase tracking-[0.2em]">
                    Co-Founder
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Innovation Leadership</p>
                </div>
              </motion.div>

              {/* Key Metrics */}
              <motion.div className="grid grid-cols-3 gap-3 mb-5" variants={fadeUp}>
                {[
                  { value: '25+', label: 'Years Exp' },
                  { value: 'APAC', label: 'Region' },
                  { value: '50+', label: 'Articles & Reports' },
                ].map((m) => (
                  <div key={m.label} className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-xl font-black text-white">{m.value}</div>
                    <div className="text-slate-500 text-[9px] uppercase font-bold tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Key Points */}
              <motion.div className="space-y-3 text-sm" variants={stagger}>
                {[
                  {
                    icon: <Lightbulb className="w-4 h-4 text-emerald-400" />,
                    text: (
                      <>
                        <strong>Innovation Leadership Coach</strong> - Strategy consultant
                      </>
                    ),
                  },
                  {
                    icon: <Mic className="w-4 h-4 text-blue-400" />,
                    text: (
                      <>
                        <strong>Keynote Speaker</strong> - Innovation workshops
                      </>
                    ),
                  },
                  {
                    icon: <LineChart className="w-4 h-4 text-amber-400" />,
                    text: (
                      <>
                        <strong>Ex-Research Director APAC @ IDC</strong> - Retail & Digital
                        Transformation
                      </>
                    ),
                  },
                  {
                    icon: <Globe className="w-4 h-4 text-rose-400" />,
                    text: (
                      <>
                        <strong>APAC Expert</strong> - 25+ years driving innovation
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <motion.div key={i} className="flex items-center space-x-3" variants={fadeUp}>
                    <span className="w-5 shrink-0 flex justify-center">{item.icon}</span>
                    <span className="text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Expertise Tags */}
              <motion.div className="mt-5" variants={fadeUp}>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                  Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Innovation', 'Strategy', 'Digital'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-10 md:px-6 relative overflow-visible">
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(180deg, #6f6dd5 0%, rgba(79, 26, 214, 0.46) 100%)',
            filter: 'blur(100px)',
            opacity: 0.6,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Led by experienced founders with deep expertise in research, engineering, and
              innovation strategy.
            </p>
            <GradientButton
              asChild
              className="px-10 py-5 text-xl flex items-center space-x-3 mx-auto group mb-8 w-max"
            >
              <a href="/pdf/pitchDeck.pdf" download="ScholarSpark-Investor-Deck.pdf">
                <Mail className="w-6 h-6" />
                <span>Request Investor Deck</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </GradientButton>
            <div className="text-gray-400">
              <p className="mb-2">Direct Contact:</p>
              <a
                href="mailto:pouya.ataei@scholarspark.ai"
                className="text-[#8F8EDF] hover:text-[#7A79C9] transition-colors"
              >
                pouya.ataei@scholarspark.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/logos/logo-vertical.png" alt="ScholarSpark" className="w-[104px] h-auto" />
          </div>
          <p className="text-gray-400 text-sm">© 2025 ScholarSpark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FoundersPage;
