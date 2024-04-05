import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import ContentWrapper from '../../Atom/ContentWrapper'
import Carousel from '../Carousel'
import { useEffect, useState } from 'react'

const Recomendation = () => {
  const { mediaType, id } = useParams()
  const [endPoint, setEndpoint] = useState('movie')
  const { data } = useFetch(`${mediaType}/${id}/recommendations`)

  useEffect(() => {
    if (mediaType === 'tv') {
      setEndpoint('tv')
    } else {
      setEndpoint('movie')
    }
  }, [mediaType])

  return (
    <div className="mb-20">
      {!!data?.results?.length > 0 && (
        <ContentWrapper>
          <div className="flex justify-between items-center mb-6">
            <p className="text-light text-xl font-bold">Recomendations</p>
          </div>
          <Carousel data={data} endPoint={endPoint} />
        </ContentWrapper>
      )}
    </div>
  )
}

export default Recomendation
