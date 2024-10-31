import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const container = document.getElementById('container-main') 
    container.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop