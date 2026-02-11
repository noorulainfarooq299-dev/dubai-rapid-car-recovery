import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Car Recovery",
    description: "24/7 professional roadside car recovery across Dubai.",
    iconName: "Truck",
    image: "/images/services/s1.jpg",
  },
  {
    id: 2,
    title: "Battery Boost",
    description: "Quick battery jump-start service anytime, anywhere.",
    iconName: "Battery",
    image: "/images/services/s2.jpg",
  },
  {
    id: 3,
    title: "Flat Tire Fix",
    description: "On-spot tire replacement & puncture repair service.",
    iconName: "CircleDot",
    image: "/images/services/s3.jpg",
  },
  {
    id: 4,
    title: "Fuel Delivery",
    description: "Emergency fuel delivery within minutes.",
    iconName: "Fuel",
    image: "/images/services/s4.webp",
  },
  {
    id: 5,
    title: "Engine Assistance",
    description: "Quick roadside engine diagnostics & help.",
    iconName: "Wrench",
    image: "/images/services/s5.webp",
  },
  {
    id: 6,
    title: "Car Lockout",
    description: "Safe car unlocking without any damage.",
    iconName: "Key",
    image: "/images/services/s6.webp",
  },
  {
    id: 7,
    title: "Accident Recovery",
    description: "Secure accident vehicle towing & transport.",
    iconName: "AlertTriangle",
    image: "/images/services/s7.jpg",
  },
  {
    id: 8,
    title: "Heavy Towing",
    description: "Truck, SUV & heavy vehicle towing services.",
    iconName: "Truck",
    image: "/images/services/s8.jpg",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-black uppercase tracking-widest mb-4"
            >
              Expert Roadside Care
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight"
            >
              Specialized Recovery <br /> & Repair Solutions
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="text-accent font-bold uppercase text-xs tracking-widest flex items-center space-x-2 group"
            >
              <span>Explore All Services</span>
              <LucideIcons.ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent =
              (LucideIcons as any)[service.iconName] ||
              LucideIcons.Wrench;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -12 }}
                className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-70" />

                  <div className="absolute top-4 right-4 bg-accent p-3 rounded-xl text-black transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <IconComponent size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-black text-white mb-3 uppercase">
                    {service.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    <span>Detailed Info</span>
                    <LucideIcons.ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>

                {/* Glow */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;