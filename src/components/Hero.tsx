/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Rocket, Target, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Content (3/5) */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            
              <h1 className="mb-6">
                Embedded Systems training,<br/>delivered directly to your school.
              </h1>
              <p className="text-[18px] text-charcoal/80 leading-relaxed max-w-[540px] mb-8 font-normal">
                Embedded Programming and Digital Fabrication programs for forward-looking secondary schools.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-6 sm:space-y-0">
                <a 
                  href="https://calendar.app.google/hHAFzLXsvQhEmX5g8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-teal text-white px-8 py-4 rounded font-bold text-[16px] flex items-center justify-center hover:bg-teal-dark transition-colors w-full sm:w-auto min-h-[56px]"
                >
                  Start Partnership
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-navy/10 flex items-center justify-center text-[10px] font-bold text-navy">
                      +5
                    </div>
                  </div>
                  <span className="text-[14px] font-medium text-navy">Partner Schools in Rwanda</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual/Card (2/5) */}
          <div className="lg:w-2/5 md:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-off-white p-8 rounded-lg border border-border-light relative"
            >
              <div className="absolute -top-4 -left-4 bg-teal text-white text-[11px] font-bold px-3 py-1 rounded">NEW MODULES</div>
              <h3 className="mb-4">Curriculum Snapshot</h3>
              <ul className="space-y-4 font-sans">
                {[
                  "IoT & Sensor Architecture",
                  "3D Rapid Prototyping",
                  "Industrial Automation Fundamentals"
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-navy/10 rounded flex items-center justify-center text-navy shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 h-[2px] bg-border-light w-full"></div>
              <p className="mt-4 text-[12px] font-semibold text-navy uppercase tracking-wide">Accreditation: Industry Certified</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

