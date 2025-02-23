import { useEffect } from 'react'

const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  className?: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const items = className ? document.querySelectorAll(className) : []

    items.forEach((item) => observer.observe(item))

    return () => {
      items.forEach((item) => observer.unobserve(item))
    }
  }, [callback, options, className])
}

export default useIntersectionObserver
