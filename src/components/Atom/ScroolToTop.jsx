import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Set posisi scroll ke atas halaman setiap kali path berubah
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Komponen ini tidak merender apa-apa di tampilan
}

export default ScrollToTop
