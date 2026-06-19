import { useState, useRef, useEffect } from 'react'
import { Eye } from 'lucide-react'

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto h-[450px] rounded-2xl overflow-hidden border border-gold-accent/20 shadow-2xl cursor-ew-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <img 
        src={beforeImage} 
        alt="Before styling" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 left-4 glass px-3 py-1 rounded text-xs tracking-wider uppercase text-gold-accent font-medium">
        Before
      </div>

      {/* After Image (Overlay, width controlled by slider) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt="After styling" 
          className="absolute inset-0 w-[670px] max-w-none h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.getBoundingClientRect().width : '100%' }}
        />
      </div>
      <div className="absolute top-4 right-4 glass px-3 py-1 rounded text-xs tracking-wider uppercase text-gold-accent font-medium pointer-events-none">
        After
      </div>

      {/* Slider Bar & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-gold-accent cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-matte-black border-2 border-gold-accent rounded-full flex items-center justify-center shadow-lg shadow-black/50 text-gold-accent">
          <Eye size={18} />
        </div>
      </div>
    </div>
  )
}
