import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import ContentWrapper from '../../Atom/ContentWrapper'
import Carousel from '../Carousel'
import { useEffect, useState } from 'react'

const Similar = () => {
  const { mediaType, id } = useParams()
  const { data } = useFetch(`${mediaType}/${id}/similar`)
  const [endPoint, setEndpoint] = useState('movie')
  const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies'

  // useEffect jika endpoit berubah
  useEffect(() => {
    if (mediaType === 'tv') {
      setEndpoint('tv')
    } else {
      setEndpoint('movie')
    }
  }, [mediaType])

  return (
    <div className="mb-20">
      {data?.results?.length > 0 && (
        <ContentWrapper>
          <div className="flex justify-between items-center mb-6">
            <p className="text-light text-xl font-bold">{title}</p>
          </div>
          <Carousel data={data} endPoint={endPoint} />
        </ContentWrapper>
      )}
    </div>
  )
}

export default Similar
