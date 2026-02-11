import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

const PHONE_NUMBER = "+971501234567";

const SERVICES = [
  {
    id: "car-recovery",
    title: "Car Recovery",
    description: "24/7 professional roadside recovery service.",
    image: "/images/services/s1.jpg",
  },
  {
    id: "battery-boost",
    title: "Battery Boost",
    description: "Emergency battery jump start anywhere in Dubai.",
    image: "/images/services/s2.jpg",
  },
  {
    id: "flat-tyre",
    title: "Flat Tyre Fix",
    description: "Quick tyre replacement and puncture repair.",
    image: "/images/services/s3.jpg",
  },
  {
    id: "fuel-delivery",
    title: "Fuel Delivery",
    description: "Instant emergency fuel supply service.",
    image: "/images/services/s4.webp",
  },
  {
    id: "engine-help",
    title: "Engine Assistance",
    description: "On-site engine diagnostics and troubleshooting.",
    image: "/images/services/s5.webp",
  },
  {
    id: "car-lockout",
    title: "Car Lockout",
    description: "Safe and damage-free vehicle unlocking.",
    image: "/images/services/s6.webp",
  },
  {
    id: "accident-recovery",
    title: "Accident Recovery",
    description: "Secure towing and accident recovery support.",
    image: "/images/services/s7.jpg",
  },
  {
    id: "heavy-towing",
    title: "Heavy Vehicle Towing",
    description: "Truck and heavy SUV towing solutions.",
    image: "/images/services/s8.jpg",
  },
];

const Services: React.FC = () => {
  return (
    <main className="pt-24 relative overflow-hidden text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg-services.webp"
          alt="Dubai roadside assistance background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
      </div>

      {/* Hero Section */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              Expert <span className="text-accent italic">Service Range</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              We provide the most comprehensive roadside assistance network in Dubai,
              combining heavy-duty recovery logistics with advanced on-site mechanical diagnosis.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] font-black text-[30vw] leading-none pointer-events-none select-none">
          SERVICE
        </div>
      </section>

      {/* Service Listings */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-40">
          {SERVICES.map((service, index) => (
            <div
              id={service.id}
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 group"
              >
                <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                  <img
                    src={service.image}
                    alt={`${service.title} roadside service in Dubai`}
                    className="w-full aspect-[4/3] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-accent font-black uppercase tracking-widest text-sm mb-6 flex items-center space-x-3">
                    <ShieldCheck size={18} />
                    <span>Certified Roadside Help</span>
                  </h2>

                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                    {service.title} <br /> Solutions
                  </h3>

                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                    <p>{service.description}</p>
                    <p>
                      Our recovery units are equipped with high-torque winches and
                      professional diagnostic systems to handle everything from safe
                      vehicle transport to on-site engine troubleshooting.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                      "Immediate Arrival",
                      "Expert Technicians",
                      "Safety Insured",
                      "Dubai-Wide Coverage",
                    ].map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center space-x-3 text-white font-bold text-xs bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm"
                      >
                        <CheckCircle size={16} className="text-accent" />
                        <span className="uppercase tracking-widest">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Call Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center space-x-4 bg-accent text-black font-black uppercase px-12 py-5 rounded-2xl transition-all shadow-xl hover:shadow-accent/30"
                  >
                    <span>Instant Call Dispatch</span>
                    <ArrowRight size={20} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Services;