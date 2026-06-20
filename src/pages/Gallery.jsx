import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react'

// Local Assets
import bridalHair from '../assets/bridal_hair.png'
import colorAfter from '../assets/hair_after.png'

const CATEGORIES = [
  { id: 'all', label: 'All Styles' },
  { id: 'women', label: 'Women Styles' },
  { id: 'men', label: 'Men Styles' },
  { id: 'color', label: 'Color Work' },
  { id: 'bridal', label: 'Bridal Looks' }
]

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'women',
    title: 'Textured Lob with Soft Waves',
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop',
    stylist: 'Elena Rostova'
  },
  {
    id: 2,
    category: 'color',
    title: 'Dimensional Honey Balayage',
    url: colorAfter,
    stylist: 'Elena Rostova'
  },
  {
    id: 3,
    category: 'men',
    title: 'Precision Mid-Fade & Textured Crop',
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop',
    stylist: 'Joshua Vance'
  },
  {
    id: 4,
    category: 'bridal',
    title: 'Bespoke Braided Bridal Updo',
    url: bridalHair,
    stylist: 'Sophia Lin'
  },
  {
    id: 5,
    category: 'women',
    title: 'Volume Blowout with Layers',
    url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600&auto=format&fit=crop',
    stylist: 'Sophia Lin'
  },
  {
    id: 6,
    category: 'men',
    title: 'Classic Taper & Scissor Cut',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop',
    stylist: 'Joshua Vance'
  },
  {
    id: 7,
    category: 'color',
    title: 'Platinum Blonde Melt',
    url: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?q=80&w=600&auto=format&fit=crop',
    stylist: 'Elena Rostova'
  },
  {
    id: 8,
    category: 'bridal',
    title: 'Romantic Half-Up Waves',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    stylist: 'Sophia Lin'
  }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxImg, setLightboxImg] = useState(null)

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 glass rounded-full text-xs font-semibold uppercase tracking-widest text-gold-accent">
          <Sparkles size={12} /> Velvet Bloom Work Lookbook
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          Transformation <span className="text-gold-gradient italic font-serif font-normal">Gallery</span>
        </h1>
        <div className="w-12 h-[2px] bg-gold-accent mx-auto mt-4" />
        <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
          Browse through some of our favorite hair transformations, bridal styles, coloring highlights, and precision grooming cuts crafted by our Edmonton team.
        </p>
      </div>

      {/* Category Tabs */}
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

      {/* Masonry-like Grid */}
      <motion.div 
        layout 
        className="masonry-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-luxury-charcoal/20"
            >
              {/* Photo */}
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover gallery-zoom"
                />
              </div>

              {/* Cover overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <div className="flex items-center gap-1 text-gold-accent text-xs font-bold uppercase tracking-widest mb-1.5">
                  <Eye size={12} /> View Look
                </div>
                <h4 className="text-white font-bold text-sm md:text-base">{item.title}</h4>
                <p className="text-[11px] text-stone-400 mt-1 uppercase font-semibold tracking-wider">Stylist: {item.stylist}</p>
              </div>

              {/* Fast Zoom Icon on top right */}
              <div className="absolute top-4 right-4 p-2 rounded-full glass border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={14} className="text-gold-accent" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Modal Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full glass rounded-2xl overflow-hidden border border-gold-accent/20 shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass text-stone-400 hover:text-white border border-white/10 hover:bg-white/5 transition-colors z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={lightboxImg.url} 
                  alt={lightboxImg.title} 
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-6 bg-luxury-charcoal/90 border-t border-gold-accent/15 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent bg-gold-accent/10 px-2 py-0.5 rounded border border-gold-accent/20 inline-block mb-1">
                  {lightboxImg.category} Look
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">{lightboxImg.title}</h3>
                <p className="text-xs text-stone-400">Created by <span className="font-semibold text-white">{lightboxImg.stylist}</span> at Velvet Bloom Edmonton.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
