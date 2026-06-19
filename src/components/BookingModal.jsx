import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, User, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react'

const SERVICES = [
  { id: 'women-cut', name: 'Women Haircut & Styling', price: '$85 - $120', duration: '60 min' },
  { id: 'men-cut', name: 'Men Haircut & Grooming', price: '$45 - $60', duration: '45 min' },
  { id: 'color', name: 'Hair Coloring & Highlights', price: '$150 - $250+', duration: '120 min' },
  { id: 'keratin', name: 'Keratin & Hair Treatment', price: '$200 - $300', duration: '90 min' },
  { id: 'bridal', name: 'Bridal & Event Styling', price: '$120 - $200', duration: '75 min' }
]

const TIME_SLOTS = [
  '09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
]

export default function BookingModal({ isOpen, onClose, initialServiceId }) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '', notes: '' })
  const [errors, setErrors] = useState({})

  // Set initial service if passed from other pages
  useEffect(() => {
    if (initialServiceId) {
      const found = SERVICES.find(s => s.id === initialServiceId)
      if (found) {
        setSelectedService(found)
        setStep(2) // Jump to date/time step if service is already selected
      }
    } else {
      setSelectedService(null)
      setStep(1)
    }
  }, [initialServiceId, isOpen])

  if (!isOpen) return null

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setStep(2)
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!date) newErrors.date = 'Please select a date'
    if (!time) newErrors.time = 'Please select a time slot'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    if (!customer.name.trim()) newErrors.name = 'Name is required'
    if (!customer.email.trim() || !/\S+@\S+\.\S+/.test(customer.email)) newErrors.email = 'Valid email is required'
    if (!customer.phone.trim() || customer.phone.length < 10) newErrors.phone = 'Valid phone is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (step === 2 && validateStep2()) {
      setStep(3)
    } else if (step === 3 && validateStep3()) {
      setStep(4)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomer(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="relative w-full max-w-lg overflow-hidden glass rounded-2xl shadow-2xl z-10 text-cream-warm flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-gold-accent/15 flex justify-between items-center bg-luxury-charcoal">
            <div>
              <h3 className="text-xl font-bold text-gold-accent">Book Your Experience</h3>
              <p className="text-xs text-stone-400 mt-0.5">Velvet Bloom Hair Studio • Edmonton</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-1.5 rounded-full hover:bg-white/5 text-stone-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Step Indicators */}
          <div className="px-5 py-3 bg-luxury-grey/50 border-b border-gold-accent/10 flex justify-between text-xs font-semibold tracking-wider text-stone-400">
            <span className={`${step >= 1 ? 'text-gold-accent' : ''}`}>1. Service</span>
            <span className={`${step >= 2 ? 'text-gold-accent' : ''}`}>2. Schedule</span>
            <span className={`${step >= 3 ? 'text-gold-accent' : ''}`}>3. Details</span>
            <span className={`${step >= 4 ? 'text-gold-accent' : ''}`}>4. Confirm</span>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto flex-1 bg-luxury-charcoal/30">
            
            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-3"
              >
                <h4 className="text-base font-medium mb-3 text-stone-300">Select a Service</h4>
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceSelect(s)}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-luxury-grey hover:border-gold-accent/40 hover:bg-luxury-grey/85 transition-all flex justify-between items-center group cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-gold-light transition-colors">{s.name}</p>
                      <p className="text-xs text-stone-400 mt-1">{s.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gold-accent">{s.price}</p>
                      <p className="text-[10px] text-stone-500 mt-1 uppercase tracking-wider flex items-center justify-end gap-1">
                        Select <ChevronRight size={10} />
                      </p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-medium text-stone-300">Choose Date & Time</h4>
                  <span className="text-xs text-gold-accent font-medium">{selectedService?.name}</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar size={13} className="text-gold-accent" /> Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value)
                      if (errors.date) setErrors(prev => ({ ...prev, date: '' }))
                    }}
                    className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 cursor-pointer"
                  />
                  {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={13} className="text-gold-accent" /> Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setTime(t)
                          if (errors.time) setErrors(prev => ({ ...prev, time: '' }))
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-center cursor-pointer ${
                          time === t
                            ? 'bg-gold-accent border-gold-accent text-matte-black shadow-lg shadow-gold-accent/20'
                            : 'bg-luxury-grey border-white/5 text-stone-300 hover:border-gold-accent/30'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                </div>
              </motion.div>
            )}

            {/* STEP 3: DETAILS FORM */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-medium text-stone-300">Your Information</h4>
                  <span className="text-xs text-gold-accent font-medium">
                    {selectedService?.name} • {time}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs text-stone-400 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={customer.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs text-stone-400 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleInputChange}
                        placeholder="jane@example.com"
                        className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-stone-400 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={customer.phone}
                        onChange={handleInputChange}
                        placeholder="(780) 555-0123"
                        className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-stone-400 font-medium">Special Requests / Hair Details</label>
                    <textarea
                      name="notes"
                      value={customer.notes}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Let us know if you want a specific stylist, have color history, or scalp sensitivities..."
                      className="w-full bg-luxury-grey border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-accent/50 text-sm resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS CONFIRMATION */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-5"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-accent/15 border border-gold-accent/40 text-gold-accent mb-2">
                  <CheckCircle size={36} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-gold-light">Booking Requested!</h4>
                  <p className="text-sm text-stone-400">We have reserved your luxury appointment slot.</p>
                </div>

                {/* Digital Receipt Card */}
                <div className="glass p-5 rounded-2xl text-left border border-gold-accent/20 bg-luxury-grey/40 space-y-4 max-w-sm mx-auto">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-bold">Booking Receipt</span>
                    <span className="text-xs text-gold-accent bg-gold-accent/10 px-2 py-0.5 rounded border border-gold-accent/20">Pending Confirmation</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Service:</span>
                      <span className="font-semibold text-white">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Price:</span>
                      <span className="font-semibold text-gold-accent">{selectedService?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Date:</span>
                      <span className="font-semibold text-white">{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Time:</span>
                      <span className="font-semibold text-white">{time}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-3">
                      <span className="text-stone-400">Guest:</span>
                      <span className="font-semibold text-white">{customer.name}</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-stone-500 text-center pt-2">
                    A text & email confirmation will be sent shortly.
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gold-gradient hover:opacity-95 text-matte-black font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-gold-accent/20"
                >
                  Done
                </button>
              </motion.div>
            )}

          </div>

          {/* Footer Controls */}
          {step < 4 && (
            <div className="p-4 border-t border-gold-accent/15 bg-luxury-grey/80 flex justify-between items-center">
              <button
                onClick={handlePrevStep}
                disabled={step === 1}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer ${
                  step === 1 ? 'text-stone-600 cursor-not-allowed' : 'text-stone-400 hover:text-white'
                }`}
              >
                <ChevronLeft size={16} /> Back
              </button>

              <button
                onClick={step === 1 ? () => setStep(2) : handleNextStep}
                disabled={step === 1 && !selectedService}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  step === 1 && !selectedService
                    ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                    : 'bg-gold-gradient text-matte-black hover:opacity-90 active:scale-[0.98]'
                }`}
              >
                {step === 3 ? 'Confirm Booking' : 'Continue'} <ChevronRight size={16} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
