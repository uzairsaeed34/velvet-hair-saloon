import { motion } from 'framer-motion'
import { Sparkles, Heart, Shield, Award, Users } from 'lucide-react'

// Local Assets
import ElenaImg from '../assets/stylist_pro.png'

const TEAM = [
  {
    name: 'Elena Marquez',
    role: 'Founder & Master Colorist',
    bio: 'Specializes in balayage, custom blondes, and hair color correction. 12+ years experience trained in Paris and Toronto.',
    image: ElenaImg
  },
  {
    name: 'Joshua Vance',
    role: 'Senior Barber & Grooming Expert',
    bio: 'Master of modern fades, classic tapers, beard grooming, and precision scissor cuts for men.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Sophia Lin',
    role: 'Senior Stylist & Bridal Specialist',
    bio: 'Bespoke bridal updos, event styling, tape-in extensions, and textured haircutting.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&auto=format&fit=crop'
  }
]

const GALLERY_PHOTOS = [
  {
    title: 'Styling Station',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=500&auto=format&fit=crop',
    desc: 'Luxe details with backlit LED mirrors and gold finishes.'
  },
  {
    title: 'Refreshment Bar',
    url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format&fit=crop',
    desc: 'Complimentary premium espresso, champagne, and teas.'
  },
  {
    title: 'Wash Lounge',
    url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=500&auto=format&fit=crop',
    desc: 'Ergonomic massage washchairs for complete relaxation.'
  },
  {
    title: 'Boutique Products',
    url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=500&auto=format&fit=crop',
    desc: 'Exclusive high-end haircare from Oribe and Kérastase.'
  }
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      
      {/* Brand Story Heading */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 glass rounded-full text-xs font-semibold uppercase tracking-widest text-gold-accent">
          <Sparkles size={12} /> The Velvet Bloom Philosophy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide leading-tight">
          Where Style Meets <span className="text-gold-gradient italic font-serif font-normal">Transformation</span>
        </h1>
        <div className="w-12 h-[2px] bg-gold-accent mx-auto mt-4" />
      </section>

      {/* Brand Story block */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-stone-300 text-sm md:text-base leading-relaxed font-light"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide font-serif">Crafting confidence, one strand at a time.</h2>
          <p>
            Established in 2021 in the heart of Edmonton, **Velvet Bloom Hair Studio** was born from a desire to redefine the traditional salon experience. We believe that booking a hair appointment shouldn’t feel like an item on a checklist—it should be a luxurious retreat.
          </p>
          <p>
            From the moment you step through our doors, your experience is carefully curated. Our design aesthetic combines sleek modern minimalism with warm, organic textures, gold hardware, and ambient lighting to provide an immediate sense of calm.
          </p>
          <p>
            We pride ourselves on using only premium, high-integrity products that are free of harsh chemicals, ensuring the health and vitality of your hair. Every service begins with a comprehensive, one-on-one consultation to understand your lifestyle, preferences, and hair history.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-2xl overflow-hidden border border-gold-accent/20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop" 
            alt="Salon environment styling station" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
            <h3 className="text-xl font-bold text-white">An Atmosphere of Luxury</h3>
            <p className="text-stone-300 text-xs font-light">Custom designed, offering private booths for a quieter and personalized styling session.</p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-2xl border border-gold-accent/15 space-y-4">
          <div className="w-10 h-10 rounded-full bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent">
            <Heart size={18} />
          </div>
          <h3 className="text-lg font-bold text-white">Our Mission</h3>
          <p className="text-stone-400 text-xs leading-relaxed">
            To provide custom hair design and coloring using high-performance, conscious products. We aim to inspire confidence, foster trust, and deliver an exceptional, stress-free experience for every guest.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl border border-gold-accent/15 space-y-4">
          <div className="w-10 h-10 rounded-full bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent">
            <Shield size={18} />
          </div>
          <h3 className="text-lg font-bold text-white">Our Values</h3>
          <p className="text-stone-400 text-xs leading-relaxed">
            Quality without compromise, absolute cleanliness, transparency in pricing, and ongoing education in modern techniques and color technology.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl border border-gold-accent/15 space-y-4">
          <div className="w-10 h-10 rounded-full bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent">
            <Award size={18} />
          </div>
          <h3 className="text-lg font-bold text-white">Our Vision</h3>
          <p className="text-stone-400 text-xs leading-relaxed">
            To be Edmonton's premier choice for bespoke color art and high-end grooming, setting industry benchmarks for both visual results and guest hospitality.
          </p>
        </div>
      </section>

      {/* Stylist Team Profiles */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide flex items-center justify-center gap-2">
            <Users size={28} className="text-gold-accent" /> The Creative Artists
          </h2>
          <div className="w-12 h-[2px] bg-gold-accent mx-auto" />
          <p className="text-stone-400 text-xs md:text-sm font-light">
            Our talented team is highly trained, passionate, and dedicated to customizing your hair design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((stylist, idx) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 group hover:border-gold-accent/40 transition-all duration-500"
            >
              <div className="h-80 w-full overflow-hidden border-b border-white/5 relative">
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                  <p className="text-stone-300 text-xs leading-relaxed font-light">{stylist.bio}</p>
                </div>
              </div>
              <div className="p-6 bg-luxury-charcoal/40">
                <h4 className="font-bold text-lg text-white group-hover:text-gold-accent transition-colors">{stylist.name}</h4>
                <p className="text-xs text-stone-400 mt-1 font-semibold uppercase tracking-wider">{stylist.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interior Showcase Gallery */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">Inside the Studio</h2>
          <div className="w-12 h-[2px] bg-gold-accent mx-auto" />
          <p className="text-stone-400 text-xs md:text-sm font-light">
            Take a visual tour of Velvet Bloom's premium downtown space, designed for quiet comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-64 rounded-2xl overflow-hidden border border-white/5"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h4 className="font-bold text-sm text-gold-accent uppercase tracking-wider">{photo.title}</h4>
                <p className="text-[11px] text-stone-300 mt-1 leading-relaxed">{photo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
