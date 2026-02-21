import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/Header';
import { Mail, ArrowRight } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';

interface Expert {
  name: string;
  flag: string;
  role: string;
  institution: string;
  image: string;
  badge: 'phd' | 'senior' | 'masters';
  badgeLabel: string;
}

const experts: Expert[] = [
  {
    name: 'Prof. Marcellin Atemkeng',
    flag: '🇿🇦',
    role: 'ML & Big Data',
    institution: 'Rhodes Uni',
    image: '/brain-trust/marcellin.jpg',
    badge: 'phd',
    badgeLabel: 'Lead',
  },
  {
    name: 'Dr. D. G. Staegemann',
    flag: '🇩🇪',
    role: 'Lead Researcher',
    institution: 'OVGU Magdeburg',
    image: '/brain-trust/daniel.jpeg',
    badge: 'phd',
    badgeLabel: 'PhD',
  },
  {
    name: 'Dr. Dirk Drechsel',
    flag: '🇩🇪',
    role: 'Policy Researcher',
    institution: 'OVGU',
    image: '/brain-trust/dirk-dreschel.webp',
    badge: 'phd',
    badgeLabel: 'PhD',
  },
  {
    name: 'Dr. Alan Litchfield',
    flag: '🇳🇿',
    role: 'AI & Cognition (30+ yrs)',
    institution: 'AUT',
    image: '/brain-trust/_alan.litchfield.jpg',
    badge: 'phd',
    badgeLabel: 'PhD',
  },
  {
    name: 'Dr. Tiffany Sandell',
    flag: '🇦🇺',
    role: 'Post Doc Fellow',
    institution: 'USYD Health',
    image: '/brain-trust/dr-tiffany-sandell.jpg',
    badge: 'phd',
    badgeLabel: 'PhD',
  },
  {
    name: 'Dr. Asad Mohammad',
    flag: '🇳🇿',
    role: 'Sr. Forecasting Analyst',
    institution: 'Electrical Eng',
    image: '/brain-trust/dr-asad-mohammad.jpg',
    badge: 'phd',
    badgeLabel: 'PhD',
  },
  {
    name: 'Dr. Stones Chindipha',
    flag: '🇿🇦',
    role: 'Sr. Lecturer',
    institution: 'Cyber Security/ML',
    image: '/brain-trust/stones-chindipha.jpg',
    badge: 'phd',
    badgeLabel: 'PhD',
  },
  {
    name: 'Jacqueline Davison',
    flag: '🇦🇺',
    role: 'Sr. Research Officer',
    institution: 'Chronic Disease',
    image: '/brain-trust/jacqueline-davison.jpg',
    badge: 'senior',
    badgeLabel: 'Senior',
  },
  {
    name: 'Karl Crosby',
    flag: '🇳🇿',
    role: 'Researcher',
    institution: 'Population Health (15 yrs)',
    image: '/brain-trust/karl-crosby.jpg',
    badge: 'senior',
    badgeLabel: 'Senior',
  },
  {
    name: 'Sarah Kearns',
    flag: '🇦🇺',
    role: 'Archaeology & Anthropology',
    institution: '',
    image: '/brain-trust/sarah-kearns.jpg',
    badge: 'masters',
    badgeLabel: 'Masters',
  },
];

const badgeStyles: Record<string, string> = {
  phd: 'bg-gradient-to-r from-[#7e7cd3] to-[#4f46e5] text-white',
  senior: 'bg-gradient-to-r from-[#059669] to-[#10b981] text-white',
  masters: 'bg-white/10 text-slate-400 border border-white/10',
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const BrainTrustPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a090c] text-white" data-scroll-section>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 sm:px-10 md:px-6 relative">
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #6f6dd5 0%, rgba(129,128,208,0) 60%)',
            filter: 'blur(120px)',
            opacity: 0.2,
            top: '10%',
            left: '20%',
            zIndex: 0,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left - Text & Metrics */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center space-x-3 text-[#7e7cd3] font-bold text-xs uppercase tracking-widest"
                  variants={fadeUp}
                >
                  <span className="relative w-2 h-2 rounded-full bg-[#7e7cd3]">
                    <span className="absolute inset-0 rounded-full bg-[#7e7cd3] animate-ping opacity-40" />
                  </span>
                  <span>Scientific Validation Hub</span>
                </motion.div>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1]"
                  variants={fadeUp}
                >
                  The Brain Trust.
                </motion.h1>
                <motion.p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg" variants={fadeUp}>
                  ScholarSpark is being stress-tested and validated by an elite cohort of{' '}
                  <strong className="text-white">PhDs and Professors</strong> from premier global
                  institutions.
                </motion.p>
              </div>

              <motion.div className="grid grid-cols-2 gap-6 pr-0 lg:pr-8" variants={stagger}>
                <motion.div
                  className="p-5 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent"
                  variants={fadeUp}
                >
                  <div className="text-4xl font-black text-white mb-1">80%</div>
                  <div className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                    PhD Concentration
                  </div>
                </motion.div>
                <motion.div
                  className="p-5 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent"
                  variants={fadeUp}
                >
                  <div className="text-4xl font-black text-[#7e7cd3] mb-1">10+</div>
                  <div className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                    Active Evaluators
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Expert List */}
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <div className="bg-[rgba(15,23,42,0.65)] backdrop-blur-[24px] border border-white/[0.08] rounded-[32px] p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <h2 className="text-slate-300 text-sm font-bold uppercase tracking-[0.2em]">
                    Validated Institutional Footprint
                  </h2>
                  <div className="flex space-x-2 text-xl">
                    <span>🇩🇪</span>
                    <span>🇿🇦</span>
                    <span>🇦🇺</span>
                    <span>🇳🇿</span>
                    <span>🇺🇸</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {experts.map((expert, index) => (
                    <motion.div
                      key={expert.name}
                      variants={fadeUp}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.03] flex items-center justify-between border-l-2 border-transparent hover:bg-[rgba(126,124,211,0.1)] hover:border-l-[#7e7cd3] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shadow-md shrink-0">
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 min-w-0">
                          <span className="text-lg shrink-0">{expert.flag}</span>
                          <span className="text-white font-bold text-sm truncate">{expert.name}</span>
                          <span className="text-slate-500 text-xs truncate hidden sm:inline">
                            {expert.role}
                            {expert.institution ? ` | ${expert.institution}` : ''}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`${badgeStyles[expert.badge]} px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide ml-2 shrink-0`}
                      >
                        {expert.badgeLabel}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
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
              Backed by world-class researchers. Join us in revolutionizing academic research.
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

export default BrainTrustPage;
