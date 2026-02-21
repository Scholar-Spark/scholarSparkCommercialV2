import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/Header';
import { Mail, ArrowRight } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';

interface Competitor {
  id: string;
  name: string;
  favicon: string;
  quadrant: 'leader' | 'visionary' | 'challenger' | 'niche';
  borderColor: string;
  hoverBg: string;
  strength: string;
  weakness: string;
  /** Position as CSS percent values within the chart */
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const competitors: Competitor[] = [
  {
    id: 'ss',
    name: 'Scholar Spark',
    favicon: 'https://www.google.com/s2/favicons?domain=scholarspark.ai&sz=128',
    quadrant: 'visionary',
    borderColor: 'border-[#7e7cd3]',
    hoverBg: 'hover:bg-[#7e7cd3]/10 hover:border-[#7e7cd3]/40',
    strength: 'Unifies Visual Discovery + Automation + Rigor.',
    weakness: 'End-to-End workflow ownership ("Second Brain").',
    top: '10%',
    left: '15%',
  },
  {
    id: 'elicit',
    name: 'Elicit',
    favicon: 'https://www.google.com/s2/favicons?domain=elicit.com&sz=128',
    quadrant: 'leader',
    borderColor: 'border-blue-400',
    hoverBg: 'hover:bg-blue-500/10 hover:border-blue-500/30',
    strength: 'Automation power ($20M funding). Instant reviews.',
    weakness: '"Black Box". Trust issues with hallucinations.',
    top: '15%',
    right: '20%',
  },
  {
    id: 'scite',
    name: 'Scite',
    favicon: 'https://www.google.com/s2/favicons?domain=scite.ai&sz=128',
    quadrant: 'leader',
    borderColor: 'border-cyan-400',
    hoverBg: 'hover:bg-cyan-500/10 hover:border-cyan-500/30',
    strength: 'Smart Citations (Context). Acquired by Research Solutions.',
    weakness: '"Shallow Research" focus. Poor for deep synthesis.',
    top: '30%',
    right: '15%',
  },
  {
    id: 'scispace',
    name: 'SciSpace',
    favicon: 'https://www.google.com/s2/favicons?domain=typeset.io&sz=128',
    quadrant: 'leader',
    borderColor: 'border-fuchsia-400',
    hoverBg: 'hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30',
    strength: 'Aggressive marketing. Good "Chat with PDF".',
    weakness: 'Can be shallow. Lower quality support.',
    top: '35%',
    right: '25%',
  },
  {
    id: 'covidence',
    name: 'Covidence',
    favicon: 'https://www.google.com/s2/favicons?domain=covidence.org&sz=128',
    quadrant: 'challenger',
    borderColor: 'border-rose-600',
    hoverBg: 'hover:bg-rose-500/10 hover:border-rose-500/30',
    strength: '"Gold Standard" for Cochrane reviews. Institutional lock-in.',
    weakness: 'Manual data entry, expensive, zero AI intelligence.',
    bottom: '30%',
    right: '18%',
  },
  {
    id: 'rayyan',
    name: 'Rayyan',
    favicon: 'https://www.google.com/s2/favicons?domain=rayyan.ai&sz=128',
    quadrant: 'challenger',
    borderColor: 'border-green-600',
    hoverBg: 'hover:bg-green-500/10 hover:border-green-500/30',
    strength: 'Free/Cheap screening tool. Widely used.',
    weakness: '"1990s" UX. AI is just a bolt-on chat box.',
    bottom: '38%',
    right: '28%',
  },
  {
    id: 'bohrium',
    name: 'Bohrium',
    favicon: 'https://www.google.com/s2/favicons?domain=bohrium.com&sz=128',
    quadrant: 'visionary',
    borderColor: 'border-red-500',
    hoverBg: 'hover:bg-red-500/10 hover:border-red-500/30',
    strength: 'Extremely comprehensive. Massive scale.',
    weakness: 'China-focused. Western trust friction.',
    top: '12%',
    left: '25%',
  },
  {
    id: 'undermind',
    name: 'Undermind',
    favicon: 'https://www.google.com/s2/favicons?domain=undermind.ai&sz=128',
    quadrant: 'visionary',
    borderColor: 'border-slate-400',
    hoverBg: 'hover:bg-slate-500/10 hover:border-slate-500/30',
    strength: 'Deep discovery reports from single prompt.',
    weakness: 'Black box generation. Hard to verify.',
    top: '18%',
    left: '35%',
  },
  {
    id: 'rabbit',
    name: 'ResearchRabbit',
    favicon: 'https://www.google.com/s2/favicons?domain=researchrabbit.ai&sz=128',
    quadrant: 'visionary',
    borderColor: 'border-orange-400',
    hoverBg: 'hover:bg-orange-500/10 hover:border-orange-500/30',
    strength: 'Excellent Visual UX for connections. Beloved by students.',
    weakness: 'Visualization only. No Processing or Writing.',
    top: '22%',
    left: '42%',
  },
  {
    id: 'consensus',
    name: 'Consensus',
    favicon: 'https://www.google.com/s2/favicons?domain=consensus.app&sz=128',
    quadrant: 'niche',
    borderColor: 'border-teal-500',
    hoverBg: 'hover:bg-teal-500/10 hover:border-teal-500/30',
    strength: 'Sleek UI. Strong in Chemistry/Hard Sciences.',
    weakness: 'Point solution. Just Q&A, not a workflow.',
    bottom: '40%',
    left: '35%',
  },
  {
    id: 'jenni',
    name: 'Jenni AI',
    favicon: 'https://www.google.com/s2/favicons?domain=jenni.ai&sz=128',
    quadrant: 'niche',
    borderColor: 'border-pink-500',
    hoverBg: 'hover:bg-pink-500/10 hover:border-pink-500/30',
    strength: 'Great for academic writing assistance.',
    weakness: '"Last Mile" only. Doesn\'t help with research.',
    bottom: '35%',
    left: '42%',
  },
];

const quadrantBadge: Record<string, { bg: string; text: string; label: string }> = {
  leader: { bg: 'bg-blue-500/20', text: 'text-blue-300', label: 'Leader' },
  visionary: { bg: 'bg-purple-500/20', text: 'text-purple-300', label: 'Visionary' },
  challenger: { bg: 'bg-rose-500/20', text: 'text-rose-300', label: 'Challenger' },
  niche: { bg: 'bg-green-500/20', text: 'text-green-300', label: 'Niche' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const CompetitiveLandscapePage: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('ss');

  const handleSelect = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(`card-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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
              <span>Market Analysis</span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4"
              variants={fadeUp}
            >
              Competitive Landscape.
            </motion.h1>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto" variants={fadeUp}>
              Strategic positioning in the Systematic Review & Research Intelligence market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quadrant + Analysis */}
      <section className="pb-20 px-6 sm:px-10 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Quadrant Chart */}
            <motion.div
              className="lg:col-span-7 bg-[rgba(15,23,42,0.65)] backdrop-blur-[24px] border border-white/[0.08] rounded-[32px] p-6 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
              style={{ minHeight: '500px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Axis Labels */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                High Vision
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                Low Vision
              </div>
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-slate-500"
                style={{ writingMode: 'vertical-rl' }}
              >
                High Execution
              </div>
              <div
                className="absolute left-3 top-1/2 text-[10px] font-black uppercase tracking-widest text-slate-500"
                style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
              >
                Low Execution
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-8">
                <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-white/10" />
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-white/10" />
              </div>

              {/* Quadrant Labels */}
              <div className="absolute top-10 right-10 text-2xl font-black text-white/5 uppercase">
                Leaders
              </div>
              <div className="absolute bottom-10 right-10 text-2xl font-black text-white/5 uppercase">
                Challengers
              </div>
              <div className="absolute top-10 left-10 text-2xl font-black text-white/5 uppercase">
                Visionaries
              </div>
              <div className="absolute bottom-10 left-10 text-2xl font-black text-white/5 uppercase">
                Niche
              </div>

              {/* Competitor Dots */}
              {competitors.map((c) => {
                const isScholarSpark = c.id === 'ss';
                const isActive = activeId === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(c.id)}
                    className={`absolute cursor-pointer transition-all duration-200 hover:scale-125 focus:outline-none ${isActive ? 'scale-110 z-20' : 'z-10'}`}
                    style={{
                      top: c.top,
                      bottom: c.bottom,
                      left: c.left,
                      right: c.right,
                    }}
                  >
                    <div
                      className={`${isScholarSpark ? 'w-14 h-14 border-4 border-[#7e7cd3]' : 'w-11 h-11 border-2 ' + c.borderColor} rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden ${isActive ? 'ring-2 ring-[#7e7cd3] ring-offset-2 ring-offset-[#0a090c]' : ''}`}
                    >
                      <img
                        src={c.favicon}
                        alt={c.name}
                        className={`${isScholarSpark ? 'w-9 h-9' : 'w-7 h-7'} object-contain`}
                      />
                    </div>
                    {isScholarSpark && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-[#7e7cd3]">
                        Scholar Spark
                      </div>
                    )}
                  </button>
                );
              })}
            </motion.div>

            {/* Analysis Panel */}
            <motion.div
              className="lg:col-span-5 bg-[rgba(15,23,42,0.65)] backdrop-blur-[24px] border border-white/[0.08] rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col"
              style={{ maxHeight: '550px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="p-4 border-b border-white/10 bg-white/5 shrink-0">
                <h2 className="text-white font-bold text-sm uppercase tracking-widest">
                  Competitor Analysis
                </h2>
              </div>
              <div className="p-4 overflow-y-auto flex-1 space-y-3 custom-scrollbar">
                {competitors.map((c) => {
                  const badge = quadrantBadge[c.quadrant];
                  const isActive = activeId === c.id;
                  const isScholarSpark = c.id === 'ss';
                  return (
                    <button
                      key={c.id}
                      id={`card-${c.id}`}
                      onClick={() => handleSelect(c.id)}
                      className={`w-full text-left p-3 rounded-xl bg-white/5 border transition-all cursor-pointer ${
                        isActive
                          ? isScholarSpark
                            ? 'border-[#7e7cd3]/40 bg-[#7e7cd3]/10 scale-[1.02]'
                            : 'border-[#7e7cd3] bg-[#7e7cd3]/20 scale-[1.02]'
                          : 'border-transparent ' + c.hoverBg
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <img src={c.favicon} alt={c.name} className="w-5 h-5 rounded" />
                          <span className="text-white font-bold text-sm">{c.name}</span>
                        </div>
                        <span
                          className={`px-2 py-0.5 ${badge.bg} ${badge.text} text-[8px] font-bold rounded-full uppercase`}
                        >
                          {badge.label}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        <strong className="text-slate-300">
                          {isScholarSpark ? 'Strategy:' : 'Strength:'}
                        </strong>{' '}
                        {c.strength}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        <strong className="text-slate-300">
                          {isScholarSpark ? 'Advantage:' : 'Weakness:'}
                        </strong>{' '}
                        {c.weakness}
                      </div>
                    </button>
                  );
                })}
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
              We're uniquely positioned to dominate the research intelligence space. Invest in the
              future of academic research.
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

export default CompetitiveLandscapePage;
