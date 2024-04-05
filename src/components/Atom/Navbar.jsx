import { useEffect, useRef, useState } from 'react'
import Navlink from './NavLink'
import { CgSearch } from 'react-icons/cg'
import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import InputSearch from './InputSearch'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef(0)
  const [isScroll, setIsScroll] = useState(true)
  const [isSearch, setIsSearch] = useState(false)
  const [isMenu, setIsMenu] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const searchQueryBtn = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`)
      setQuery('')
      setIsSearch(false)
    }
  }
  const searchQuery = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
      setQuery('')
      setIsSearch(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      if (scrollY > navRef.current) {
        setIsScroll(false)
        setIsSearch(false)
        setIsMenu(false)
        setQuery('')
      } else if (scrollY < navRef.current) {
        setIsScroll(true)
      }
      navRef.current = scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const inputRef = useRef(null)
  useEffect(() => {
    if (isSearch) {
      inputRef.current.focus()
    } else {
      inputRef.current.blur()
    }
  }, [isSearch])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full h-16 flex items-center shadow-sm ${
        isScroll ? 'visible' : ''
      }`}
    >
      <div className="container flex justify-between px-8 sm:px-4">
        <h1
          className="logo cursor-pointer bg-clip-text text-2xl uppercase font-bold"
          onClick={() => navigate('/')}
        >
          layarkaca21
        </h1>
        <div className="flex items-center gap-4">
          <div
            className={`nav__menu flex items-center gap-4 lg:absolute lg:bg-bg lg:flex-col lg:justify-start lg:pt-24 lg:top-0 lg:right-0 lg:translate-x-56 lg:w-56 lg:h-screen lg:px-4 ${
              isMenu ? 'open' : ''
            }`}
          >
            <RxCross2
              onClick={() => {
                setIsMenu(!isMenu)
                setIsSearch(false)
              }}
              className="hidden lg:block lg:absolute lg:top-4 lg:right-8 lg:text-3xl lg:text-light cursor-pointer"
            />
            <Navlink
              onClick={() => {
                navigate(`/explore/movie`)
                setIsMenu(false)
              }}
            >
              Movies
            </Navlink>
            <Navlink
              onClick={() => {
                navigate(`/explore/tv`)
                setIsMenu(false)
              }}
            >
              TV Shows
            </Navlink>
          </div>
          <CgSearch
            onClick={() => setIsSearch(!isSearch)}
            className="text-light text-2xl cursor-pointer search__icon"
          />
          <IoMenu
            onClick={() => {
              setIsMenu(!isMenu)
              setIsSearch(false)
            }}
            className="text-light text-3xl cursor-pointer hidden lg:block"
          />
        </div>
      </div>
      <RxCross2
        onClick={() => {
          setIsSearch(!isSearch)
          setIsMenu(false)
        }}
        className={`close__search ${
          isSearch ? 'open' : ''
        } absolute text-2xl text-light cursor-pointer`}
      />
      <InputSearch
        ref={inputRef}
        onClick={searchQueryBtn}
        value={query}
        onKeyUp={searchQuery}
        onChange={(e) => setQuery(e.target.value)}
        className={`search__nav ${isSearch ? 'open' : ''}`}
      />
    </nav>
  )
}

export default Navbar
