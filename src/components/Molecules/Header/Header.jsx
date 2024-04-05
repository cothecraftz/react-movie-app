import { useEffect, useState } from 'react'
import HeroContent from '../../Atom/HeroContent'
// import Navbar from '../../Atom/Navbar';
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../LazyLoadImages/Img'

const Header = () => {
  const [background, setBackground] = useState('')
  const { url } = useSelector((state) => state.home)
  const { data } = useFetch('/movie/upcoming')

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
  }, [data, url])

  return (
    <header className="relative w-full min-h-screen overflow-hidden">
      <div className="img__container w-full h-full absolute">
        <Img src={`${background}`} />
      </div>
      <div className="absolute top-0 left-0 z-40 w-full h-full">
        <HeroContent />
      </div>
    </header>
  )
}

export default Header
