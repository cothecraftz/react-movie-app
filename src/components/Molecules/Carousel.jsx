import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import React, { Suspense } from 'react'
import Loader from '../Atom/Loader'
import PosterFallback from '../../assets/images/no-poster.png'
const Card = React.lazy(() => import('../Molecules/Card'))

const Carousel = ({ data, endPoint }) => {
  const { url } = useSelector((state) => state.home)

  return (
    <div className="card__container">
      <div className="card__wrapper">
        {data?.results?.map((item) => {
          const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
          return (
            <Suspense key={item.id} fallback={<Loader />}>
              <Card data={item} src={posterUrl} endPoint={endPoint} />
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  data: PropTypes.object,
  endPoint: PropTypes.string,
}

export default Carousel
