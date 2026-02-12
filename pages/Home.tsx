
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
  <main className="overflow-x-hidden">
  <Hero />
  <ServicesGrid />
  <RepairServices />
  <WhyChooseUs />

  {/* Quick Dispatch Highlight */}
  <section className="py-16 md:py-24 bg-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-5/12">
          <div className="lg:sticky lg:top-32">
            
            <h2 className="text-accent text-xs sm:text-sm font-black uppercase tracking-widest mb-3 sm:mb-4">
              Urgent Dispatch
            </h2>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6 sm:mb-8">
              Available Across <br className="hidden sm:block" /> All Dubai Areas
            </h3>

            <p className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
              Submit your location details below. Our digital dispatch center identifies 
              the closest mobile technician to your coordinates to guarantee 
              sub-30 minute arrival.
            </p>

            <div className="space-y-5 sm:space-y-6">
              
              {/* Hotline Button */}
              <motion.a
                whileHover={{ x: 5 }}
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center space-x-4 sm:space-x-6 p-5 sm:p-8 border border-white/10 rounded-2xl bg-card hover:border-accent transition-all group w-full"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-accent text-black flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="sm:hidden" />
                  <Phone size={32} className="hidden sm:block" />
                </div>

                <div className="overflow-hidden">
                  <div className="text-gray-500 text-[9px] sm:text-[10px] font-black uppercase mb-1 tracking-widest">
                    24/7 Hotline
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white group-hover:text-accent transition-colors break-words">
                    {PHONE_NUMBER}
                  </div>
                </div>
              </motion.a>

              {/* Dispatch Status */}
              <div className="flex items-center space-x-4 sm:space-x-6 p-5 sm:p-8 border border-white/10 rounded-2xl bg-white/5 w-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                  <Navigation size={24} className="sm:hidden" />
                  <Navigation size={32} className="hidden sm:block" />
                </div>

                <div>
                  <div className="text-gray-500 text-[9px] sm:text-[10px] font-black uppercase mb-1 tracking-widest">
                    Global Dispatch
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-white uppercase italic">
                    Active Monitoring
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/5 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl"
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
