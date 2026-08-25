import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function EyeLoader() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline()

    // Eye closing
    tl.to('.eye-top', {
      y: 30,
      duration: 0.6,
      ease: 'power2.inOut',
    })
    tl.to(
      '.eye-bottom',
      {
        y: -30,
        duration: 0.6,
        ease: 'power2.inOut',
      },
      0
    )

    // Pause
    tl.pause(1.2)

    // Eye opening
    tl.to(
      '.eye-top',
      {
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      1.4
    )
    tl.to(
      '.eye-bottom',
      {
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      1.4
    )
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-8">
      <div className="relative w-32 h-32">
        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold tracking-wider">EYESON</span>
        </div>

        {/* Eye Top */}
        <div className="eye-top absolute top-0 left-0 right-0 h-16 bg-black dark:bg-white rounded-full" />

        {/* Eye Bottom */}
        <div className="eye-bottom absolute bottom-0 left-0 right-0 h-16 bg-black dark:bg-white rounded-full" />
      </div>
    </div>
  )
}
