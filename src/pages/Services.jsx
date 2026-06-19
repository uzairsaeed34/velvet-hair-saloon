import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Calendar, Clock, Scissors } from 'lucide-react'

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'cut', label: 'Cuts & Styling' },
  { id: 'color', label: 'Color Work' },
  { id: 'treatment', label: 'Treatments' },
  { id: 'bridal', label: 'Bridal & Event' }
]

const SERVICES = [
  {
    id: 'women-cut',
    category: 'cut',
    name: 'Women Haircut & Styling',
    price: '$85 - $120',
    duration: '60 min',
    desc: 'Includes luxury wash, custom scalp massage, precision cut, and signature Velvet Bloom blowout.'
  },
  {
    id: 'men-cut',
    category: 'cut',
    name: 'Men Haircut & Grooming',
    price: '$45 - $60',
    duration: '45 min',
    desc: 'Precision fade or scissor cut, wash, hot towel neck shave treatment, and modern product finish.'
  },
  {
    id: 'color',
    category: 'color',
    name: 'Hair Coloring & Highlights',
    price: '$150 - $250+',
    duration: '120 min',
    desc: 'Bespoke hand-painted balayage, full foils, custom root melting, toner gloss, and luxury blow-dry styling.'
  },
  {
    id: 'gloss-toner',
    category: 'color',
    name: 'Glossing & Toner Refresh',
    price: '$70 - $95',
    duration: '40 min',
    desc: 'Perfect between color visits to neutralize warm brassy tones, enhance depth, and add a glassy high shine.'
  },
  {
    id: 'keratin',
    category: 'treatment',
    name: 'Keratin & Hair Treatment',
    price: '$200 - $300',
    duration: '90 min',
    desc: 'Premium amino acid smoothing therapy that removes frizz, cuts styling time in half, and seals in moisture.'
  },
  {
    id: 'fusio-dose',
    category: 'treatment',
    name: 'Kérastase Fusio-Dose',
    price: '$35 (Add-on)',
    duration: '15 min',
    desc: 'Custom-mixed conditioning shots targeting secondary hair concerns: nutrition, shine, damage repair, or volume.'
  },
  {
    id: 'bridal',
    category: 'bridal',
    name: 'Bridal & Event Styling',
    price: '$120 - $200',
    duration: '75 min',
    desc: 'Premium bridal updos, event styles, romantic waves, and veil/headpiece placement. Trial consultation included.'
  },
  {
    id: 'extensions',
    category: 'treatment',
    name: 'Premium Tape-In Extensions',
    price: 'By Consultation',
    duration: '150 min',
    desc: 'Premium 100% human hair extensions for volume and length. Custom matched, fitted, and blended seamlessly.'
  }
]

export default function Services({ onBookService }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 glass rounded-full text-xs font-semibold uppercase tracking-widest text-gold-accent">
          <Scissors size={12} /> Velvet Bloom Service Menu
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          Bespoke Hair <span className="text-gold-gradient italic font-serif font-normal">Pricing</span>
        </h1>
        <div className="w-12 h-[2px] bg-gold-accent mx-auto mt-4" />
        <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
          Every booking includes a thorough consultation, complimentary luxury wash with head massage, premium styling products, and refreshments from our espresso & champagne bar.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-gold-gradient text-matte-black shadow-lg shadow-gold-accent/20 font-bold'
                : 'glass text-stone-300 hover:text-white hover:border-gold-accent/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Cards Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              key={service.id}
              className="glass p-6 rounded-2xl flex flex-col justify-between hover:border-gold-accent/40 group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-gold-light transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs mt-1">
                      <Clock size={12} className="text-gold-accent/50" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <span className="text-gold-accent font-bold text-base md:text-lg shrink-0">
                    {service.price}
                  </span>
                </div>
                <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 flex items-center gap-1">
                  <Sparkles size={10} className="text-gold-accent" /> Premium Care
                </span>
                <button
                  onClick={() => onBookService(service.id)}
                  className="px-5 py-2 bg-white/5 border border-white/10 group-hover:bg-gold-gradient group-hover:text-matte-black group-hover:border-gold-accent text-gold-accent font-semibold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Additional Information Banner */}
      <section className="glass rounded-2xl p-8 border border-gold-accent/15 max-w-3xl mx-auto space-y-4 text-center">
        <h4 className="text-lg font-bold text-white flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-gold-accent" /> Need a Custom Consultation?
        </h4>
        <p className="text-xs text-stone-400 max-w-xl mx-auto leading-relaxed">
          Not sure which service is right for you, or interested in booking a large wedding party? We offer complimentary 15-minute consultations to discuss details.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onBookService('extensions')}
            className="px-6 py-2.5 bg-gold-gradient text-matte-black font-bold rounded-xl text-xs uppercase tracking-wider transition-all hover:opacity-90 cursor-pointer"
          >
            Book Free Consult
          </button>
        </div>
      </section>

    </div>
  )
}
