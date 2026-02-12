import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';

const Hero: React.FC = () => {
 return (
  <section className="relative min-h-[100svh] flex items-center pt-24 sm:pt-28 md:pt-32 overflow-hidden bg-black">
    
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/main.webp"
        alt="Tow truck assisting a broken-down car at night in Dubai"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
          <ShieldCheck size={14} className="text-accent sm:hidden" />
          <ShieldCheck size={16} className="text-accent hidden sm:block" />
          <span className="text-accent text-[10px] sm:text-xs font-black uppercase tracking-widest text-center sm:text-left">
            Live: 24/7 Professional Dispatch Active
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1] sm:leading-[0.95] uppercase mb-6 sm:mb-8 tracking-tight">
          24/7 Car Recovery <br className="hidden sm:block" />
          <span className="text-accent italic block sm:inline">
            & On-Site Repair
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-8 sm:mb-12 leading-relaxed font-medium">
          Emergency roadside assistance, battery replacement, flat tyre fixing 
          and expert mechanical repair anywhere in Dubai within{" "}
          <span className="text-white font-bold border-b-2 border-accent">
            30 minutes
          </span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
          
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent text-black px-6 sm:px-10 py-4 sm:py-5 rounded font-black text-base sm:text-lg lg:text-xl uppercase transition-all shadow-[0_20px_40px_rgba(255,193,7,0.2)]"
          >
            <Phone size={20} className="sm:hidden" />
            <Phone size={24} className="hidden sm:block" />
            <span>Call Now</span>
          </motion.a>

          <motion.a
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-6 sm:px-10 py-4 sm:py-5 rounded font-bold text-base sm:text-lg lg:text-xl uppercase backdrop-blur-sm transition-all"
          >
            <span>Request Help</span>
            <ArrowRight size={18} className="sm:hidden" />
            <ArrowRight size={20} className="hidden sm:block" />
          </motion.a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 border-t border-white/10 pt-8 sm:pt-10">
          {[
            { label: "Arrival Time", val: "30 Mins" },
            { label: "Pricing", val: "From AED 100" },
            { label: "Technicians", val: "Certified" },
            { label: "Status", val: "Available 24/7" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="border-l border-accent/40 pl-3 sm:pl-4"
            >
              <div className="text-gray-500 text-[9px] sm:text-[10px] font-black uppercase mb-1 tracking-widest">
                {stat.label}
              </div>
              <div className="text-white text-sm sm:text-lg font-black italic uppercase leading-tight">
                {stat.val}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>

    {/* Scroll Indicator (Desktop Only) */}
    <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-white/20 uppercase font-black text-sm tracking-[0.5em]"
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll Down
      </motion.div>
    </div>
  </section>
);
};

export default Hero;