import PropTypes from 'prop-types'
import Img from '../LazyLoadImages/Img'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import Loader from '../Atom/Loader'
import Rating from '../Atom/Rating'
import Genres from '../Atom/Genres'
import { useNavigate } from 'react-router-dom'

const Card = ({ data, src, endPoint }) => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [loading])

  return (
    <div className="card">
      <div
        className="relative"
        onClick={() => navigate(`/${data.media_type || endPoint}/${data.id}`)}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Img src={src} />
            <div className="w-10 h-10 rounded-full overflow-hidden absolute -bottom-3 left-2 bg-light">
              <Rating rating={data.vote_average.toFixed(1)} />
            </div>
            <div className="absolute bottom-3 right-2 flex justify-end items-end flex-col gap-1">
              <Genres data={data.genre_ids.slice(0, 2)} />
            </div>
          </>
        )}
      </div>
      <div className="px-2">
        <h2 className="text-light line-clamp-1 text-lg font-semibold mt-1">
          {data.title || data.name}
        </h2>
        <p className="text-slate-400 text-sm">
          {dayjs(data.release_date || data.first_air_date).format('MMM D, YYYY')}
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
  src: PropTypes.string,
  endPoint: PropTypes.string,
}

export default Card
