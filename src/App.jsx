import { fetchDataApi } from './utils/api'
import { getApiConfiguration, getGenres } from './store/homeSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/home'
import DetailPage from './pages/detail'
import ScrollToTop from './components/Atom/ScroolToTop'
import SearchResults from './pages/SearchResults'
import ExplorePage from './pages/explore'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    apiConfiguration()
    genreConfiguration()
  }, [])

  const apiConfiguration = () => {
    fetchDataApi('/configuration').then((res) => {
      const url = {
        poster: res.images.secure_base_url + 'original',
        backdrop: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      }
      dispatch(getApiConfiguration(url))
    })
  }

  const genreConfiguration = async () => {
    let promises = []
    let endPoints = ['tv', 'movie']
    let AllGnres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataApi(`genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    data.map(({ genres }) => {
      return genres.map((item) => (AllGnres[item.id] = item))
    })
    dispatch(getGenres(AllGnres))
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:mediaType/:id" element={<DetailPage />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<ExplorePage />} />
      </Routes>
    </Router>
  )
}

export default App
