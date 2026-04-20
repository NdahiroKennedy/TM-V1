/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      {/* CTA Section */}
      <div className="bg-navy py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-6">Ready to lead the technical revolution?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Join 20+ years of education leadership. Schedule a partnership consultation to discuss how we can transform your school's technical curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendar.app.google/hHAFzLXsvQhEmX5g8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full sm:w-auto px-10 py-5 min-h-[56px]"
            >
              Schedule a Consultation
            </a>
            <button className="btn-secondary text-white border-white hover:bg-white/10 w-full sm:w-auto px-10 py-5 min-h-[56px]">
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-24 px-5 md:px-10 border-t border-border-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-navy mb-6">Tomorrow Minds</div>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              Industrial-grade technical training for the next generation of innovators in Rwanda and beyond.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#program" className="text-charcoal/70 hover:text-navy transition-colors">Technical Program</a></li>
              <li><a href="#schools" className="text-charcoal/70 hover:text-navy transition-colors">For Schools</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-navy transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-navy transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-navy mb-6 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-charcoal/70 hover:text-navy transition-colors">About Us</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-navy transition-colors">Careers</a></li>
              <li><a href="#faq" className="text-charcoal/70 hover:text-navy transition-colors">FAQ</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-navy transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal shrink-0 mt-1" size={18} />
                <span className="text-charcoal/70">Kigali Innovation City, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal shrink-0" size={18} />
                <span className="text-charcoal/70">+250 788 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal shrink-0" size={18} />
                <a href="mailto:info@tomorrowminds.rw" className="text-charcoal/70 hover:text-navy transition-colors">info@tomorrowminds.rw</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto py-8 mt-20 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-charcoal/60">
          <div className="flex space-x-6">
            <span>&copy; {new Date().getFullYear()} Tomorrow Minds Education Services</span>
            <a href="#" className="hover:text-navy">Privacy Policy</a>
            <a href="#" className="hover:text-navy">B2B Terms</a>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span className="font-medium">Available for 2025/26 Academic Partnerships</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
