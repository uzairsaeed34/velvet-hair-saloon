import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Phone, ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingServiceId, setBookingServiceId] = useState(null)

  const handleBookClick = () => {
    setBookingServiceId(null)
    setIsBookingOpen(true)
  }

  const handleBookService = (serviceId) => {
    setBookingServiceId(serviceId)
    setIsBookingOpen(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Simple state router
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onPageChange={setCurrentPage} 
            onBookClick={handleBookClick} 
            onBookService={handleBookService} 
          />
        )
      case 'about':
        return <About />
      case 'services':
        return <Services onBookService={handleBookService} />
      case 'gallery':
        return <Gallery />
      case 'contact':
        return <Contact />
      default:
        return (
          <Home 
            onPageChange={setCurrentPage} 
            onBookClick={handleBookClick} 
            onBookService={handleBookService} 
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-matte-black text-cream-warm flex flex-col justify-between selection:bg-gold-accent selection:text-matte-black">
      
      {/* Sticky Top Header Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onBookClick={handleBookClick} 
      />

      {/* Main Page Content with transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Branding, Hours, Map link, Socials */}
      <Footer onPageChange={setCurrentPage} />

      {/* Floating Action Elements (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll To Top (Hidden on top) */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-luxury-grey hover:bg-white/5 text-gold-accent border border-white/10 hover:border-gold-accent/40 rounded-full shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>

        {/* Floating Quick Booking Button */}
        <button
          onClick={handleBookClick}
          className="flex items-center gap-2 px-5 py-3.5 bg-gold-gradient text-matte-black font-bold rounded-full shadow-2xl hover:opacity-95 cursor-pointer hover:scale-105 active:scale-95 transition-all"
          title="Book Appointment"
        >
          <Calendar size={18} />
          <span className="text-xs uppercase tracking-wider hidden sm:inline">Book Appointment</span>
        </button>
      </div>

      {/* Step-by-Step Interactive Booking Wizard */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialServiceId={bookingServiceId}
      />

    </div>
  )
}
