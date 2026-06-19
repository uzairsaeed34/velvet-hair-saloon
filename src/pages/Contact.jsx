import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 glass rounded-full text-xs font-semibold uppercase tracking-widest text-gold-accent">
          <Mail size={12} /> Get in Touch
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          Connect With <span className="text-gold-gradient italic font-serif font-normal">Us</span>
        </h1>
        <div className="w-12 h-[2px] bg-gold-accent mx-auto mt-4" />
        <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
          Have questions about our treatments, styling pricing, or hosting a bridal styling party? Send a message and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Contact Details Card */}
        <div className="glass rounded-2xl p-8 border border-gold-accent/15 space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Velvet Bloom Studio</h3>
            
            <div className="space-y-4 text-sm text-stone-300">
              <div className="flex gap-3 items-start">
                <MapPin className="text-gold-accent shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-semibold text-white">Our Location</p>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    10123 104 St NW,<br />Edmonton, AB T5J 1A1
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-gold-accent shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p className="text-xs text-stone-400 mt-0.5">(780) 555-0145</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="text-gold-accent shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white">Email Address</p>
                  <p className="text-xs text-stone-400 mt-0.5">hello@velvetbloom.ca</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={15} className="text-gold-accent" /> Opening Hours
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 AM - 08:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>09:00 AM - 06:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-gold-accent">Closed</span></li>
            </ul>
          </div>

          <div className="border-t border-white/5 pt-6 space-y-3">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest">Follow Our Work</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold-accent hover:border-gold-accent transition-colors">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold-accent hover:border-gold-accent transition-colors">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold-accent hover:border-gold-accent transition-colors flex-col justify-center">
                <span className="text-xs font-bold">🎵</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-2 glass rounded-2xl p-8 border border-gold-accent/15">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-accent/15 border border-gold-accent/40 text-gold-accent">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gold-light">Message Sent Successfully!</h3>
              <p className="text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Velvet Bloom. Our guest relations manager will contact you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 bg-white/5 border border-white/10 hover:border-gold-accent text-gold-accent rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="(780) 555-0123"
                    className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="jane@example.com"
                  className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm"
                />
                {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about the hair look you want to achieve, or ask any service questions..."
                  className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-0.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gold-gradient hover:opacity-95 text-matte-black font-bold rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-accent/15"
              >
                <Send size={14} /> Send Message
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Embedded Map Section */}
      <section className="space-y-4">
        <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center lg:text-left">Interactive Map Directions</h4>
        <div className="rounded-2xl overflow-hidden border border-gold-accent/15 h-[400px]">
          <iframe
            title="Velvet Bloom Salon Location directions"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.435555431697!2d-113.5009581!3d53.5411776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224b11f32a13%3A0xc3f3458bfb44e2e!2s10123%20104%20St%20NW%2C%20Edmonton%2C%20AB%20T5J%201A1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            className="w-full h-full border-0 filter grayscale invert contrast-125 brightness-75"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  )
}
