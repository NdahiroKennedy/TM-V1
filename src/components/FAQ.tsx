/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "What exactly is included in the school partnership?",
      answer: "We provide a full-time certified instructor, the complete curriculum (lesson plans, projects, assessments), all necessary hardware (microcontrollers, sensors, 3D printers), and ongoing equipment maintenance. Your school provides the physical space and manages student enrollment."
    },
    {
      question: "How do we handle instructor quality and training?",
      answer: "All Tomorrow Minds instructors undergo a rigorous selection process and 3-month foundational training program. They are specialists in both the technical domain (embedded systems/digital fabrication) and modern project-based pedagogy."
    },
    {
      question: "Is this program compatible with the Rwandan national curriculum?",
      answer: "Yes. Our curriculum is designed to exceed the national standards for ICT and Science while maintaining strict alignment with REB (Rwanda Education Board) learning objectives. It serves as a powerful practical enhancement to theoretical coursework."
    },
    {
      question: "What are the infrastructure requirements for the school?",
      answer: "We require a dedicated classroom (minimum 40sqm) with stable electricity and internet connectivity. We handle the interior layout, furniture specifications, and technical installation of the lab equipment."
    },
    {
      question: "What is the typical duration of a partnership?",
      answer: "We prefer long-term partnerships of 3+ years to ensure sustainable student outcomes and department growth. However, we offer trial phases for select schools during the first academic year."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-5 md:px-10 bg-off-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-charcoal/70">Clear answers for school decision-makers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-border-light rounded-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-5 md:px-8 py-5 md:py-6 flex justify-between items-center hover:bg-gray-50 transition-colors min-h-[44px]"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-navy text-lg pr-4">{faq.question}</span>
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-charcoal/80 leading-relaxed border-t border-border-light pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-charcoal/70 mb-4">Have more questions?</p>
          <a href="#contact" className="text-teal font-bold hover:underline">
            Download our Partnership Guide (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
