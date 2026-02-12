
import React from 'react';
import ContactForm from '../components/sections/ContactForm';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
  <main className="pt-20 sm:pt-24 bg-black min-h-screen">

  {/* Hero */}
  <section className="py-16 sm:py-20 bg-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight sm:tracking-tighter mb-6 leading-tight">
        Get In <span className="text-accent">Touch</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
        Our dispatch center is active 24/7. Whether it's an emergency or a quote request, we are here to help.
      </p>

    </div>
  </section>


  {/* Main Section */}
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* LEFT SIDE */}
        <div className="space-y-12">

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-accent font-black uppercase tracking-widest text-xs sm:text-sm mb-6">
              Emergency Contacts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="p-6 sm:p-8 bg-card border border-white/10 rounded-2xl hover:border-accent transition-all group text-center sm:text-left"
              >
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0">
                  📞
                </div>
                <div className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase mb-1">
                  Call 24/7
                </div>
                <div className="text-lg sm:text-xl font-black text-white break-words">
                  {PHONE_NUMBER}
                </div>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 sm:p-8 bg-card border border-white/10 rounded-2xl hover:border-green-500 transition-all group text-center sm:text-left"
              >
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0">
                  💬
                </div>
                <div className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase mb-1">
                  WhatsApp Us
                </div>
                <div className="text-lg sm:text-xl font-black text-white">
                  Live Chat
                </div>
              </a>

            </div>
          </div>


          {/* Address */}
          <div>
            <h3 className="text-accent font-black uppercase tracking-widest text-xs sm:text-sm mb-6">
              HQ Address
            </h3>

            <div className="p-6 sm:p-8 bg-card border border-white/10 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">📍</div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg mb-2">
                    Dubai Rapid Car Recovery
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Plot 44, Al Quoz Industrial Area 3,<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Map */}
          <div>
            <h3 className="text-accent font-black uppercase tracking-widest text-xs sm:text-sm mb-6">
              Service Area Map
            </h3>

            <div className="relative w-full h-[220px] sm:h-[300px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden grayscale">
              
              <img
                src="https://picsum.photos/seed/dubai-map/800/600"
                alt="Service Area Map"
                className="w-full h-full object-cover opacity-50"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent text-black px-4 py-2 sm:p-4 rounded-full font-black text-xs sm:text-sm animate-bounce">
                  WE ARE HERE
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="bg-card p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] mt-10 lg:mt-0">

          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
              Request a Quote
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Provide your details and location, and we will send our nearest truck to your location.
            </p>
          </div>

          <ContactForm />

        </div>

      </div>

    </div>
  </section>

</main>
  );
};

export default Contact;
