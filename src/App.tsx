/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const SERVICES = [
  {
    title: "Weekly Maintenance",
    description: "Comprehensive cleaning, chemical balancing, and equipment check to keep your pool pristine year-round.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "Equipment Repair",
    description: "Expert diagnostics and repair for pumps, filters, heaters, and automation systems.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Green-to-Clean",
    description: "Specialized recovery service to transform neglected pools back into crystal-clear oases.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Acid Washing",
    description: "Deep surface cleaning to remove stubborn stains and restore the original luster of your pool finish.",
    icon: <Star className="w-6 h-6" />
  }
];

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    text: "Azure has been taking care of our pool for 3 years. It's never looked better. Reliable and professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    text: "The Green-to-Clean service was a lifesaver after we moved into our new home. Highly recommend!",
    rating: 5
  },
  {
    name: "Robert Taylor",
    text: "Fair pricing and they actually show up when they say they will. Best pool service in the area.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-display font-bold tracking-tighter">AZURE</div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
          <a href="#reviews" className="hover:opacity-60 transition-opacity">Reviews</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl font-display"
        >
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
          alt="Crystal clear pool water with sunlight refraction"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-5xl md:text-8xl font-display font-light tracking-tight max-w-4xl leading-[1.1]"
          >
            Pristine Water.<br />
            <span className="italic">Perfectly Managed.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12"
          >
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-medium hover:bg-pool-blue hover:text-white transition-all duration-300 group"
            >
              Book a Service
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.3em] animate-bounce">
          Scroll to explore
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight mb-6">Expert Care for Your Oasis</h2>
              <p className="text-charcoal/60 text-lg">We provide comprehensive pool maintenance solutions tailored to your specific needs, ensuring your water is always safe, clear, and inviting.</p>
            </div>
            <div className="text-pool-blue font-display text-8xl font-bold opacity-10 hidden lg:block">01</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/5 border border-charcoal/5">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: "rgba(0, 188, 212, 0.03)" }}
                className="bg-white p-10 flex flex-col h-full transition-colors"
              >
                <div className="text-pool-blue mb-6">{service.icon}</div>
                <h3 className="text-xl font-display font-medium mb-4">{service.title}</h3>
                <p className="text-charcoal/60 leading-relaxed mb-8 flex-grow">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-pool-blue transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Reviews */}
      <section id="reviews" className="py-24 px-6 md:px-12 bg-charcoal/2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pool-blue text-pool-blue" />
                ))}
              </div>
              <h2 className="text-4xl font-display font-light tracking-tight mb-6">Trusted by 500+ Local Pool Owners</h2>
              <p className="text-charcoal/60 mb-8">Our commitment to quality and reliability has made us the highest-rated pool service in the region.</p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-pool-blue w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-pool-blue w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Certified Techs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIEWS.slice(0, 2).map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5">
                  <p className="text-lg italic text-charcoal/80 mb-6">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold">{review.name}</span>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-pool-blue text-pool-blue" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight mb-8">Ready for a<br />Clearer View?</h2>
              <p className="text-charcoal/60 text-lg mb-12">Contact us today for a free estimate or to schedule your first service. We respond to all inquiries within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pool-blue/10 flex items-center justify-center text-pool-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Call Us</div>
                    <div className="text-xl font-display">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pool-blue/10 flex items-center justify-center text-pool-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Email Us</div>
                    <div className="text-xl font-display">hello@azurepool.care</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pool-blue/10 flex items-center justify-center text-pool-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Location</div>
                    <div className="text-xl font-display">Palm Springs, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-white p-10 rounded-3xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pool-blue transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pool-blue transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pool-blue transition-colors appearance-none">
                    <option className="bg-charcoal">Weekly Maintenance</option>
                    <option className="bg-charcoal">One-time Cleaning</option>
                    <option className="bg-charcoal">Equipment Repair</option>
                    <option className="bg-charcoal">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-50 font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pool-blue transition-colors resize-none" placeholder="Tell us about your pool..."></textarea>
                </div>
                <button className="w-full bg-pool-blue text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter">AZURE</div>
          
          <div className="flex gap-8 text-xs uppercase tracking-widest opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          </div>

          <div className="text-xs uppercase tracking-widest opacity-40">
            © 2026 Azure Pool Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
