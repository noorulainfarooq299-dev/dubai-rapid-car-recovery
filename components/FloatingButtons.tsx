
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-[60] flex flex-col space-y-3 sm:space-y-4">
  
  {/* WhatsApp */}
  <motion.a 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.4)] relative group"
    aria-label="WhatsApp Support"
  >
    <MessageCircle size={24} className="sm:w-8 sm:h-8" />

    {/* Tooltip (hidden on mobile hover-less devices) */}
    <span className="hidden sm:block absolute right-full mr-4 bg-black/80 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-white/10">
      Chat Now
    </span>
  </motion.a>
  

  {/* Phone */}
  <motion.a 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={`tel:${PHONE_NUMBER}`}
    className="w-14 h-14 sm:w-16 sm:h-16 bg-accent text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,193,7,0.4)] relative group"
    aria-label="Emergency Call"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 bg-accent rounded-full opacity-30"
    />

    <Phone size={24} className="relative z-10 sm:w-8 sm:h-8" />

    {/* Tooltip */}
    <span className="hidden sm:block absolute right-full mr-4 bg-black/80 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-white/10">
      Emergency Call
    </span>
  </motion.a>

</div>
  );
};

export default FloatingButtons;
