import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer({ onPageChange }) {
  const handleNavClick = (pageId) => {
    onPageChange(pageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-luxury-charcoal border-t border-gold-accent/15 text-stone-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/5 pb-12 mb-10">
        
        {/* Brand Information */}
        <div className="space-y-4">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start cursor-pointer text-left"
          >
            <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">Velvet Bloom</span>
            <span className="text-[10px] tracking-[0.4em] text-gold-accent uppercase -mt-0.5 font-medium">Hair Studio</span>
          </button>
          <p className="text-xs leading-relaxed text-stone-400">
            A luxury boutique hair studio in downtown Edmonton, bringing bespoke styling, custom coloring, and an exceptional high-end pampering experience.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold-accent hover:border-gold-accent transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold-accent hover:border-gold-accent transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold-accent hover:border-gold-accent transition-colors flex-col">
              <span className="text-[10px] font-bold tracking-tighter">🎵</span>
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Clock size={14} className="text-gold-accent" /> Hours of Bloom
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li className="flex justify-between"><span>Monday - Friday</span> <span>09:00 AM - 08:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>09:00 AM - 06:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span className="text-gold-accent font-medium">Closed</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <MapPin size={14} className="text-gold-accent" /> Find Us
          </h4>
          <ul className="space-y-3 text-xs text-stone-400">
            <li className="flex gap-2 items-start">
              <MapPin size={14} className="text-gold-accent shrink-0 mt-0.5" />
              <span>10123 104 St NW,<br />Edmonton, AB T5J 1A1</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={14} className="text-gold-accent shrink-0" />
              <span>(780) 555-0145</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={14} className="text-gold-accent shrink-0" />
              <span>hello@velvetbloom.ca</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
        <p>© {new Date().getFullYear()} Velvet Bloom Hair Studio Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <button onClick={() => handleNavClick('services')} className="hover:text-gold-accent transition-colors cursor-pointer">Services</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-gold-accent transition-colors cursor-pointer">About Us</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-gold-accent transition-colors cursor-pointer">Contact & Map</button>
        </div>
      </div>
    </footer>
  )
}
