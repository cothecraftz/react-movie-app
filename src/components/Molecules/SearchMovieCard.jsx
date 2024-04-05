import PropTypes from 'prop-types'
import Img from '../LazyLoadImages/Img'
import { useSelector } from 'react-redux'
import PosterCard from '../../assets/images/no-poster.png'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import Genre from '../Atom/Genres'
import Rating from '../Atom/Rating'

const SearchMovieCard = ({ data, mediaType }) => {
  const { url } = useSelector((state) => state.home)
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div
        onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
        className="w-full aspect-[1/1.5] overflow-hidden rounded-md cursor-pointer relative"
      >
        <div className="wrapper__searchImg absolute top-0 left-0">
          <Img src={data?.poster_path ? url.poster + data?.poster_path : PosterCard} />
        </div>
        <div className="w-10 h-10 bg-light rounded-full absolute top-2 left-2 flex justify-end items-end flex-col gap-1">
          <Rating rating={data?.vote_average?.toFixed(1)} />
        </div>
        <div className="absolute bottom-3 right-1 flex justify-end items-end flex-col gap-1">
          <Genre data={data?.genre_ids?.slice(0, 2)} />
        </div>
      </div>
      <div>
        <h1 className="text-light line-clamp-1 text-base font-semibold mt-1">
          {data?.title || data?.name}
        </h1>
        <p className="text-slate-400 text-sm">
          {dayjs(data.release_date || data.first_air_date).format('MMM D, YYYY')}
        </p>
      </div>
    </div>
  )
}

SearchMovieCard.propTypes = {
  data: PropTypes.object,
  mediaType: PropTypes.string,
}

export default SearchMovieCard
