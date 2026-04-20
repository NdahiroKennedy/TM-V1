/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Box, Award, CheckCircle2, Zap } from 'lucide-react';

export default function Program() {
  const features = [
    {
      title: "Embedded Systems",
      description: "Hands-on electronics with Arduino and microcontrollers. From basic circuits to complex autonomous systems.",
      icon: Cpu,
      image: "https://picsum.photos/seed/arduino/800/500"
    },
    {
      title: "Digital Fabrication",
      description: "3D printing, laser cutting, and CAD design. We turn students into creators by bridging the physical and digital worlds.",
      icon: Box,
      image: "https://picsum.photos/seed/3dprinting/800/500"
    },
  ];

  const benefits = [
    "Full-time professional instructors provided by Tomorrow Minds",
    "Complete lab setup including hardware, tools, and materials",
    "Tailored curriculum that fits your school's existing schedule",
    "Continuous assessment and globally recognized certifications",
    "Integration with national education standards and technical goals",
    "Exclusive access to regional innovation competitions and events",
  ];

  return (
    <section id="program" className="bg-white py-24 md:py-32 px-5 md:px-10 border-t border-border-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <span className="label-caps">Our Technical Pillars</span>
          <h2 className="text-[40px] leading-tight mb-6 text-navy">Equipping Schools with the Tools of Tomorrow</h2>
          <p className="text-[18px] text-charcoal/70 leading-relaxed">
            Our program is built on three core pillars that combine technical mastery with creative problem solving, ensuring students are prepared for the 21st-century workforce.
          </p>
        </div>

        {/* Improved Feature Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 max-w-4xl">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 bg-off-white">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white flex items-center justify-center shadow-lg border-t border-r border-border-light">
                  <feature.icon className="text-navy" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mb-4 text-[24px] font-bold text-navy group-hover:text-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-charcoal/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits List / Callout */}
        <div className="bg-off-white p-7 md:p-20 rounded-sm border border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-[32px] mb-8">What Your School Receives</h2>
              <div className="grid grid-cols-1 gap-5">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal mt-1 shrink-0" size={18} />
                    <span className="text-charcoal/80 text-[16px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto h-full min-h-[300px] rounded-sm overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/robotics/800/1000" 
                alt="Technology Lab" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/10"></div>
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
