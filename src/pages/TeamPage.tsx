import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/Header';
import { Mail, ArrowRight } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Josi Taranto', role: 'UI/UX Designer', image: '/team-page/josi.jpg' },
  { name: 'Yuhan Soh', role: 'Frontend Developer', image: '/team-page/yuhan.jpeg' },
  { name: 'Shahab Hosseinian', role: 'UI/UX Designer', image: '/team-page/shahab.jpg' },
  { name: 'Bennet Thompson', role: 'Software Architect', image: '/team-page/bennet.jpeg' },
  { name: 'Tauriq', role: 'Backend Developer', image: '/team-page/tauriq.jpeg' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const TeamPage: React.FC = () => {
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
              <span>The Product Team</span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4"
              variants={fadeUp}
            >
              Meet Our Team.
            </motion.h1>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto" variants={fadeUp}>
              A talented team of engineers, designers, and researchers building the future of
              academic research.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-12 px-6 sm:px-10 md:px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="bg-[rgba(15,23,42,0.65)] backdrop-blur-[24px] border border-white/[0.08] rounded-[32px] p-6 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white/10 shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-white font-bold text-base">{member.name}</h3>
              <p className="text-slate-400 text-[10px] uppercase tracking-wide mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Stats */}
      <section className="pb-20 px-6 sm:px-10 md:px-6">
        <motion.div
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {[
            { value: '5', label: 'Team Members' },
            { value: '50+', label: 'Combined Years', highlight: true },
            { value: '5', label: 'Countries' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="p-5 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent text-center"
            >
              <div
                className={`text-3xl font-black mb-1 ${stat.highlight ? 'text-[#7e7cd3]' : 'text-white'}`}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              We're building a world-class team to revolutionize academic research. Join us.
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

export default TeamPage;
