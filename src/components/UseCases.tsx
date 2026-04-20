/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, Clock, Lock, Globe, Building2 } from 'lucide-react';

export default function UseCases() {
  const values = [
    {
      title: "Academic Excellence",
      description: "Upgrade your curriculum with modern technology that prepares students for top-tier universities.",
      icon: ShieldCheck,
    },
    {
      title: "Marketing Edge",
      description: "Stand out in a competitive market by offering exclusive high-tech programs that parents want.",
      icon: BarChart3,
    },
    {
      title: "Cost Efficiency",
      description: "Avoid the massive overhead of hiring specialized staff and sourcing industrial equipment.",
      icon: Clock,
    },
    {
      title: "Risk Mitigation",
      description: "Our veteran team handles safety, maintenance, and curriculum updates. You focus on school leadership.",
      icon: Lock,
    },
    {
      title: "Global Standards",
      description: "Training aligned with international technical frameworks, giving your students a global advantage.",
      icon: Globe,
    },
    {
      title: "Community Impact",
      description: "Position your school as a leader in Rwanda's digital transformation and socio-economic growth.",
      icon: Building2,
    },
  ];

  return (
    <section id="schools" className="py-24 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Sticky Headline */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl mb-6">Built for Educational Leaders</h2>
            <p className="text-lg text-charcoal/70 mb-8">
              We partner with schools that are committed to academic innovation and long-term student success.
            </p>
            <div className="hidden lg:block">
               <div className="p-6 bg-off-white border-l-4 border-teal rounded-sm">
                <h4 className="text-navy font-bold mb-2">Ideal Partner Profile</h4>
                <ul className="text-sm text-charcoal/80 space-y-2">
                  <li>• Established secondary school</li>
                  <li>• Focus on innovation and technology</li>
                  <li>• Infrastructure for technical lab</li>
                  <li>• Growth-oriented leadership</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Value Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="text-teal mb-4 group-hover:scale-110 transition-transform origin-left duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
