import { useState } from 'react'
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
    <nav className="sticky top-0 z-40 w-full glass border-b border-gold-accent/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex flex-col items-start cursor-pointer group text-left"
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

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onBookClick}
            className="flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-matte-black font-semibold rounded-xl text-sm transition-all hover:opacity-90 hover:shadow-lg hover:shadow-gold-accent/15 cursor-pointer active:scale-95"
          >
            <Sparkles size={14} />
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass border-b border-gold-accent/15 absolute left-0 right-0 top-[80px] p-6 space-y-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-semibold tracking-wider uppercase py-2 border-b border-white/5 transition-colors cursor-pointer ${
                  currentPage === item.id 
                    ? 'text-gold-accent font-bold' 
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setIsOpen(false)
              onBookClick()
            }}
            className="w-full py-3 bg-gold-gradient text-matte-black font-bold rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-accent/10"
          >
            <Sparkles size={14} />
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  )
}
