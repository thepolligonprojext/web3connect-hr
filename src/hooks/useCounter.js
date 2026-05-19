import { useState, useEffect, useRef } from 'react'

export function useCounter(target, suffix = '', duration = 1400) {
  const [value, setValue] = useState(`0${suffix}`)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        if (reduceMotion) {
          setValue(`${target}${suffix}`)
          observer.disconnect()
          return
        }
        const start = performance.now()
        function step(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(`${Math.round(target * eased)}${suffix}`)
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix, duration])

  return { value, ref }
}
