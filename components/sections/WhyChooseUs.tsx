import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, UserCheck, Wallet, Wrench, Globe } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    { title: "24/7 Response", desc: "Constant dispatch ready across all Dubai sectors.", icon: Clock },
    { title: "30-Min Arrival", desc: "The fastest reach for urgent breakdown situations.", icon: Zap },
    { title: "Expert Mechanics", desc: "Certified professionals for on-site diagnosis.", icon: UserCheck },
    { title: "Equipped Fleet", desc: "Trucks designed for both towing and mechanical repair.", icon: Wrench },
    { title: "Upfront Pricing", desc: "No hidden fees. Premium support at competitive rates.", icon: Wallet },
    { title: "Dubai-Wide", desc: "Full coverage from Marina to Silicon Oasis.", icon: Globe }
  ];

  return (
   <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
      {/* IMAGE SIDE */}
      <div className="w-full lg:w-5/12 order-2 lg:order-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="/images/why-choose-us.webp" 
            alt="Professional Mechanic Team in Dubai providing expert repair services"
            className="w-full rounded-2xl sm:rounded-3xl shadow-2xl relative z-10 border border-white/10"
          />

          {/* Corner Accent */}
          <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-l-4 sm:border-l-6 md:border-l-8 border-t-4 sm:border-t-6 md:border-t-8 border-accent z-0 opacity-50" />

          {/* Experience Badge */}
          <div className="absolute bottom-6 -right-6 sm:bottom-8 sm:-right-8 md:bottom-10 md:-right-10 bg-accent text-black p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl z-20 transform -rotate-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">
              12+
            </div>
            <div className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest">
              Years Expertise
            </div>
          </div>

        </motion.div>
      </div>
      
      {/* CONTENT SIDE */}
      <div className="w-full lg:w-7/12 order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-accent text-xs sm:text-sm font-black uppercase tracking-widest mb-3 sm:mb-4">
            Unmatched Reliability
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6 sm:mb-8 lg:mb-10">
            Safety & Speed <br className="hidden sm:block" />
            <span className="text-gray-500 block sm:inline">
              Without Compromise
            </span>
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-12">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 sm:gap-5 group"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <point.icon size={20} className="sm:hidden" />
                  <point.icon size={24} className="hidden sm:block" />
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight mb-1 sm:mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
  );
};

export default WhyChooseUs;