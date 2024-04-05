import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Navbar from '../components/Atom/Navbar'
import Footer from '../components/Molecules/Footer'
import DetailBenner from '../components/Molecules/Detail/DetailBenner'
import LoaderDetail from '../components/Atom/LoaderDetail'
import TopCast from '../components/Molecules/Detail/TopCast'
import Similar from '../components/Molecules/Detail/Similar'
import Recomendation from '../components/Molecules/Detail/Recomendation'

const DetailPage = () => {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`${mediaType}/${id}`)
  const { data: credits } = useFetch(`${mediaType}/${id}/credits`)

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 w-full min-h-[600px] relative overflow-hidden mb-8">
        {!loading ? (
          <DetailBenner data={data} credits={credits} />
        ) : (
          <LoaderDetail className="min-h-[500px]" />
        )}
      </section>
      {!loading ? <TopCast data={credits?.cast} /> : <LoaderDetail className="min-h-[200px]" />}
      {!loading ? <Similar /> : <LoaderDetail className="min-h-[350px]" />}
      {!loading ? <Recomendation /> : <LoaderDetail className="min-h-[350px]" />}
      {!loading && <Footer />}
    </div>
  )
}

export default DetailPage
