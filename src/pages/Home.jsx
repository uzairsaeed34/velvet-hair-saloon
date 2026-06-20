import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, Star, Heart, MapPin, Phone, Calendar, ArrowLeft } from 'lucide-react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

// Import local assets
import salonInterior from '../assets/salon_interior.png'
import hairBefore from '../assets/hair_before.png'
import hairAfter from '../assets/hair_after.png'
import stylistPro from '../assets/stylist_pro.png'
import bridalHair from '../assets/bridal_hair.png'

const FEATURED_SERVICES = [
  { 
    id: 'women-cut', 
    name: 'Bespoke Women Cut & Blowout', 
    desc: 'Crafting signature shapes that complement your unique style and hair type.', 
    price: 'From $85', 
    time: '60 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'color', 
    name: 'Luxury Balayage & Highlights', 
    desc: 'Hand-painted color dimensions that capture light and create soft, blended transitions.', 
    price: 'From $150', 
    time: '120 mins',
    image: hairAfter
  },
  { 
    id: 'bridal', 
    name: 'Bridal & Editorial Styling', 
    price: 'From $120', 
    desc: 'Premium event and wedding updo styling tailored to perfection for your special day.', 
    time: '75 mins', 
    image: bridalHair 
  }
]

const TESTIMONIALS = [
  { name: 'Sarah Jenkins', role: 'Edmonton Local', text: 'Velvet Bloom is hands down the best salon experience I have ever had. The atmosphere is stunning, the team is professional, and my balayage has never looked more natural and glossy!', rating: 5 },
  { name: 'Marcus Vance', role: 'Downtown Resident', text: 'Highly recommend Joshua for men grooming. The attention to detail is unmatched, and the complimentary espresso bar makes the premium experience complete.', rating: 5 },
  { name: 'Emily Dumont', role: 'Bride-to-be', text: 'I booked Velvet Bloom for my bridal trial and wedding day styling. They created absolute magic! The hair was gorgeous, stayed secure all night, and my bridesmaids looked stunning.', rating: 5 }
]

export default function Home({ onPageChange, onBookClick, onBookService }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${salonInterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 w-full text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-xs font-semibold uppercase tracking-widest text-gold-accent">
              <Sparkles size={12} /> Premium Hair Studio in Edmonton
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-wide text-white">
              Where Style Meets <span className="text-gold-gradient italic font-serif font-normal">Elegance</span>
            </h1>
            
            <p className="text-stone-300 text-sm md:text-lg font-light leading-relaxed">
              Step into an oasis of luxury in downtown Edmonton. Velvet Bloom Hair Studio delivers bespoke hair designs, signature coloring, and a high-end salon experience tailored entirely to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookClick}
                className="px-8 py-3.5 bg-gold-gradient text-matte-black font-bold rounded-xl text-sm transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-gold-accent/20 cursor-pointer text-center"
              >
                Book Appointment
              </button>
              
              <button
                onClick={() => onPageChange('services')}
                className="px-8 py-3.5 glass hover:bg-white/5 border border-gold-accent/30 text-gold-accent font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">Signature Services</h2>
          <div className="w-12 h-[2px] bg-gold-accent mx-auto" />
          <p className="text-stone-400 text-xs md:text-sm font-light">
            Indulge in our curated selection of premier hair treatments. Designed with the finest products to leave your hair radiant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col justify-between hover:border-gold-accent/40 group transition-all duration-300"
            >
              <div className="space-y-4">
                {s.image && (
                  <div className="h-44 w-full rounded-xl overflow-hidden mb-4 border border-white/5">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-lg text-white group-hover:text-gold-light transition-colors">{s.name}</h3>
                  <span className="text-gold-accent text-sm font-bold shrink-0">{s.price}</span>
                </div>
                <p className="text-stone-400 text-xs leading-relaxed">{s.desc}</p>
              </div>

              <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/5">
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">{s.time}</span>
                <button
                  onClick={() => onBookService(s.id)}
                  className="text-xs font-bold text-gold-accent group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Book Service <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Before / After Transformation Slider */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">The Bloom Transformation</h2>
          <div className="w-12 h-[2px] bg-gold-accent mx-auto" />
          <p className="text-stone-400 text-xs md:text-sm font-light">
            Real clients, real results. Slide the handle to witness the incredible transformation created by our stylist specialists.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <BeforeAfterSlider beforeImage={hairBefore} afterImage={hairAfter} />
        </div>
      </section>

      {/* Stylist Preview & Brand Values */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-1.5 text-gold-accent text-xs font-bold uppercase tracking-widest">
            <Heart size={12} /> The Craftsmanship
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Meet Elena Rostova, Lead Artist & Founder
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            With over 12 years of luxury hairdressing expertise across Paris, Toronto, and Edmonton, Elena founded Velvet Bloom to build a studio focused on quality, integrity, and individualized client care. 
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            "We believe that hair is the ultimate form of self-expression. Our passion lies in crafting custom tones and precision shapes that elevate your confidence and emphasize your natural radiance."
          </p>
          
          <button
            onClick={() => onPageChange('about')}
            className="px-6 py-3 border border-gold-accent/25 hover:border-gold-accent text-gold-accent font-semibold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Our Story & Team
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="absolute inset-0 bg-gold-accent/10 rounded-2xl blur-xl" />
          <div className="relative rounded-2xl overflow-hidden border border-gold-accent/20 shadow-2xl">
            <img src={stylistPro} alt="Elena Rostova" className="w-full h-[450px] object-cover" />
            <div className="absolute bottom-0 inset-x-0 glass p-5 flex justify-between items-center border-t border-gold-accent/10">
              <div>
                <p className="font-bold text-white text-base">Elena Rostova</p>
                <p className="text-xs text-gold-accent">Founder & Master Colorist</p>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                12+ Yrs Exp
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Slider */}
      <section className="bg-luxury-grey/30 border-y border-gold-accent/10 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="flex justify-center gap-1.5 text-gold-accent">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          
          <div className="h-44 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-2xl text-cream-warm italic font-serif leading-relaxed px-4">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>
                <div>
                  <p className="font-semibold text-gold-accent text-sm md:text-base">{TESTIMONIALS[activeTestimonial].name}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Nav dots */}
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeTestimonial === idx ? 'bg-gold-accent w-6' : 'bg-stone-700'
                }`}
                aria-label={`Testimonial slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location / Edmonton Map Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">Visit Velvet Bloom</h2>
          <div className="w-12 h-[2px] bg-gold-accent mx-auto" />
          <p className="text-stone-400 text-xs md:text-sm font-light">
            Conveniently nestled in downtown Edmonton, our private studio is designed for complete relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Map details */}
          <div className="glass rounded-2xl p-8 flex flex-col justify-between border border-gold-accent/15 lg:col-span-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Velvet Bloom Studio</h3>
              <div className="space-y-4 text-sm text-stone-300">
                <p className="flex gap-2">
                  <MapPin className="text-gold-accent shrink-0 mt-0.5" size={16} />
                  <span>10123 104 St NW,<br />Edmonton, AB T5J 1A1</span>
                </p>
                <p className="flex gap-2 items-center">
                  <Phone className="text-gold-accent shrink-0" size={16} />
                  <span>(780) 555-0145</span>
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 space-y-2">
                <p className="text-xs uppercase font-bold text-stone-500 tracking-wider">Free Client Parking</p>
                <p className="text-xs text-stone-400">Complimentary heated underground parking stalls available. Entrance via 104th St.</p>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="w-full mt-6 py-3.5 bg-gold-gradient text-matte-black font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-accent/15"
            >
              <Calendar size={14} /> Schedule Visit
            </button>
          </div>

          {/* Interactive Google Map block */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gold-accent/15 h-[350px] lg:h-auto min-h-[300px]">
            <iframe
              title="Velvet Bloom Edmonton Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.435555431697!2d-113.5009581!3d53.5411776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224b11f32a13%3A0xc3f3458bfb44e2e!2s10123%20104%20St%20NW%2C%20Edmonton%2C%20AB%20T5J%201A1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              className="w-full h-full border-0 filter grayscale invert contrast-125 brightness-75"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
