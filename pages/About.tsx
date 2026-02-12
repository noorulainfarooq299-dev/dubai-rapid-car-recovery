
import React from 'react';
import { COMPANY_NAME, TAGLINE } from '../constants';

const About: React.FC = () => {
  return (
   <main className="pt-20 sm:pt-24">

  {/* Sub-hero */}
  <section className="py-16 sm:py-20 bg-dark relative border-b border-white/5">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight sm:tracking-tighter mb-6 leading-tight">
        About Our <span className="text-accent">Mission</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
        {TAGLINE}. Since our inception, we have been dedicated to providing the most reliable and fastest car recovery service in the UAE.
      </p>

    </div>
  </section>


  {/* Content */}
  <section className="py-16 sm:py-20 lg:py-24 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Content */}
        <div className="space-y-10">

          <div>
            <h2 className="text-accent font-black uppercase tracking-widest text-xs sm:text-sm mb-4">
              Our Story
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
              Born In Dubai, <br className="hidden sm:block" /> Dedicated To Safety
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {COMPANY_NAME} started with a single truck and a clear vision: to ensure that no driver in Dubai feels stranded or unsafe. Today, we operate a large fleet of modern recovery vehicles stationed strategically across the city.
            </p>
          </div>


          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mb-4">
              Uncompromising Standards
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              We understand that your vehicle is more than just a machine; it is an investment and a necessity. That is why our technicians undergo rigorous training and our equipment is regularly inspected to meet international safety standards.
            </p>

            <ul className="space-y-3">
              {[
                "Certified Professional Drivers",
                "GPS-Tracked Dispatching",
                "Premium Insurance Coverage",
                "24/7 Dedicated Support Center"
              ].map(item => (
                <li key={item} className="flex items-start space-x-3 text-white font-bold text-xs sm:text-sm">
                  <span className="text-accent mt-1">✔</span>
                  <span className="uppercase leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>


        {/* Right Image Section */}
        <div className="relative mt-10 lg:mt-0">

          <img
            src="/images/bg-about.webp"
            alt="Our Professional Fleet"
            className="w-full rounded-2xl border border-white/10"
          />

          {/* Badge */}
          <div className="relative sm:absolute sm:-bottom-10 sm:-left-10 mt-6 sm:mt-0 bg-accent text-black p-6 sm:p-8 rounded-2xl shadow-2xl w-fit">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black">20K+</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase">
              Successful Recoveries
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>


  {/* Core Values */}
  <section className="py-16 sm:py-20 lg:py-24 bg-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase mb-12">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          { title: "Transparency", desc: "Honest pricing with zero hidden costs or surprise fees." },
          { title: "Efficiency", desc: "Every minute counts. We optimize our routes for speed." },
          { title: "Care", desc: "We treat every car as if it were our own luxury vehicle." }
        ].map(v => (
          <div key={v.title} className="p-6 sm:p-8 lg:p-10 bg-card rounded-2xl border border-white/5">
            <h3 className="text-accent font-black text-lg sm:text-xl uppercase mb-4">
              {v.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {v.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>

</main>
  );
};

export default About;
