import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar({ currentPage, onPageChange, onBookClick }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (pageId) => {
    onPageChange(pageId)
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full glass border-b border-gold-accent/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex flex-col items-start cursor-pointer group text-left z-50"
          >
            <span className="text-xl font-bold tracking-[0.2em] text-white group-hover:text-gold-accent transition-colors duration-300 uppercase">
              Velvet Bloom
            </span>
            <span className="text-[10px] tracking-[0.4em] text-gold-accent uppercase -mt-0.5 font-medium">
              Hair Studio
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors relative py-2 cursor-pointer ${
                  currentPage === item.id 
                    ? 'text-gold-accent font-bold' 
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-matte-black font-semibold rounded-xl text-sm transition-all hover:opacity-90 hover:shadow-lg hover:shadow-gold-accent/15 cursor-pointer active:scale-95"
            >
              <Sparkles size={14} />
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer z-50 relative"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            {/* Top bar spacer to match sticky nav height */}
            <div className="h-20 border-b border-gold-accent/10 flex items-center px-6">
              <button
                onClick={() => handleNavClick('home')}
                className="flex flex-col items-start cursor-pointer text-left"
              >
                <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">Velvet Bloom</span>
                <span className="text-[10px] tracking-[0.4em] text-gold-accent uppercase -mt-0.5 font-medium">Hair Studio</span>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-2">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-3xl font-bold py-4 border-b transition-colors cursor-pointer ${
                    currentPage === item.id
                      ? 'text-gold-accent border-gold-accent/30'
                      : 'text-white hover:text-gold-accent border-white/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Book Appointment CTA at Bottom */}
            <div className="px-8 pb-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsOpen(false)
                  onBookClick()
                }}
                className="w-full py-4 bg-gold-gradient text-matte-black font-bold rounded-2xl text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-gold-accent/20"
              >
                <Sparkles size={18} />
                Book Appointment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
