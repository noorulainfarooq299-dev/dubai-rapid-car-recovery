import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, Activity, Thermometer, Droplets, Zap } from 'lucide-react';

const RepairServices: React.FC = () => {
  const repairs = [
    { title: "Engine Diagnosis", icon: Settings, desc: "On-site computer scanning and mechanical fault finding." },
    { title: "Cooling System", icon: Thermometer, desc: "Radiator leak repairs and coolant replenishment." },
    { title: "Electrical Fixes", icon: Zap, desc: "Alternator and starter motor troubleshooting." },
    { title: "Oil & Fluid Leaks", icon: Droplets, desc: "Immediate identification and sealing of hazardous leaks." }
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-6">Mobile Workshop</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
              On-Site Mechanical <br /> <span className="text-accent italic">Repair Experts</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Unlike traditional recovery services that only tow, we bring the garage to you. Our technicians are equipped to handle complex mechanical issues right on the roadside, saving you time and money.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {repairs.map((repair, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-white/5 p-3 rounded-xl text-accent border border-white/10">
                    <repair.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-2">{repair.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{repair.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <img 
                src="/images/repair-services.png" 
                alt="Certified mechanic repairing car engine on-site for immediate roadside support"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-10 -left-10 bg-accent p-10 rounded-3xl text-black shadow-2xl hidden md:block">
              <div className="text-5xl font-black leading-none mb-2">95%</div>
              <div className="text-[10px] font-black uppercase tracking-widest">Success Rate On-Site</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RepairServices;