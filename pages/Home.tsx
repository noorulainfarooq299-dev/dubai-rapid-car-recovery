
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Navigation } from 'lucide-react';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import RepairServices from '../components/sections/RepairServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import ContactForm from '../components/sections/ContactForm';
import { PHONE_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <RepairServices />
      <WhyChooseUs />
      
      {/* Quick Dispatch Highlight */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-4">Urgent Dispatch</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                  Available Across <br /> All Dubai Areas
                </h3>
                <p className="text-gray-400 mb-12 text-lg">
                  Submit your location details below. Our digital dispatch center identifies the closest mobile technician to your coordinates to guarantee sub-30 minute arrival.
                </p>
                
                <div className="space-y-6">
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href={`tel:${PHONE_NUMBER}`} 
                    className="flex items-center space-x-6 p-8 border border-white/10 rounded-2xl bg-card hover:border-accent transition-all group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-accent text-black flex items-center justify-center">
                      <Phone size={32} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">24/7 Hotline</div>
                      <div className="text-2xl font-black text-white group-hover:text-accent transition-colors">
                        {PHONE_NUMBER}
                      </div>
                    </div>
                  </motion.a>
                  
                  <div className="flex items-center space-x-6 p-8 border border-white/10 rounded-2xl bg-white/5">
                    <div className="w-16 h-16 rounded-xl bg-white/10 text-white flex items-center justify-center">
                      <Navigation size={32} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">Global Dispatch</div>
                      <div className="text-2xl font-black text-white uppercase italic">Active Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/5 p-8 md:p-16 rounded-[2rem] shadow-2xl"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Home;
