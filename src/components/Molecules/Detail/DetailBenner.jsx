import ContentWrapper from '../../Atom/ContentWrapper'
import Img from '../../LazyLoadImages/Img'
import PropTypes from 'prop-types'
import Genres from '../../Atom/Genres'
import Rating from '../../Atom/Rating'
import PosterFallback from '../../../assets/images/no-poster.png'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import React from 'react'

const DetailBenner = ({ credits, data }) => {
  const { url } = useSelector((state) => state.home)

  const director = credits?.crew.filter((d) => d.job === 'Director')
  const writter = credits?.crew.filter(
    (w) => w.job === 'Screenplay' || w.job === 'Story' || w.job === 'Writer'
  )

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`
  }

  return (
    <React.Fragment>
      {!!data && (
        <>
          <div className="backdrop__img absolute top-0 left-0 w-full h-full">
            <Img src={url.backdrop + data.backdrop_path} />
          </div>
          <div className="layer__opacity"></div>
          <ContentWrapper>
            <div className="w-full flex md:flex-col gap-8 relative">
              <div className="detail__left w-[300px] h-[450px] md:w-full md:h-auto overflow-hidden rounded-xl">
                {data.poster_path ? (
                  <Img src={url.backdrop + data.poster_path} />
                ) : (
                  <Img src={PosterFallback} />
                )}
              </div>
              <div className="flex-1 relative">
                <h1 className="text-light text-2xl font-semibold">
                  {' '}
                  {`${data.name || data.title} (${dayjs(data?.release_date).format('YYYY')})`}
                </h1>
                <p className="text-slate-500 text-sm italic font-medium">
                  {data.tagline || "don't have tagline"}
                </p>
                {data?.genres?.length > 0 && (
                  <div className="flex gap-2 py-4">
                    <Genres data={data.genres} />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full my-2 overflow-hidden bg-light">
                  <Rating rating={data.vote_average.toFixed(1)} />
                </div>
                <p className="text-light text-sm">
                  <strong className="text-lg mb-2">Overview</strong>
                  <br />
                  {data.overview}
                </p>
                {data.status && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Status : </strong>
                      <span className="text-sm">{data.status}</span>
                    </p>
                  </div>
                )}
                {data?.number_of_episodes && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Total Episode : </strong>
                      <span className="text-sm">{data.number_of_episodes}</span>
                    </p>
                  </div>
                )}
                {data?.number_of_seasons && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Total Season : </strong>
                      <span className="text-sm">{data.number_of_seasons}</span>
                    </p>
                  </div>
                )}
                {data?.runtime && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Runtime : </strong>
                      <span className="text-sm">
                        {data.runtime ? toHoursAndMinutes(data.runtime) : '-'}
                      </span>
                    </p>
                  </div>
                )}
                {director?.length > 0 && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Director : </strong>

                      {director.map((d, i) => (
                        <span key={i} className="text-sm">
                          {d.name ? d.name : '-'}
                          {director.length - 1 !== i && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
                {writter?.length > 0 && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Writter : </strong>
                      {writter.map((w, i) => (
                        <span key={i} className="text-sm">
                          {w.name ? w.name : '-'}
                          {writter.length - 1 !== i && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
                {data?.created_by?.length > 0 && (
                  <div className="info">
                    <p>
                      <strong className="text-base">Created : </strong>
                      {data?.created_by?.map((c, i) => (
                        <span key={i} className="text-sm">
                          {c.name ? c.name : '-'}
                          {data.created_by.length - 1 !== i && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </ContentWrapper>
        </>
      )}
    </React.Fragment>
  )
}

DetailBenner.propTypes = {
  credits: PropTypes.object,
  data: PropTypes.object,
}

export default DetailBenner
