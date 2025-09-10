import { useEffect, useRef, useState } from "react"

export function useRevealOnScroll({ threshold = 0.15, root = null, rootMargin = '0px', once = true } = {}) {
    const ref = useRef(null)
    const [shown, setarShown] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        
         const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                            setarShown(true)
                            if (once) obs.unobserve(entry.target)
                    } else if (!once) {
                            setarShown(false)
                    }
        })
      },
      { threshold, root, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, root, rootMargin, once])

  return { ref, shown }
}