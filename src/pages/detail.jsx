import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Navbar from '../components/Atom/Navbar';
import Footer from '../components/Molecules/Footer';
import DetailBenner from '../components/Molecules/Detail/DetailBenner';

const DetailPage = () => {
	const { mediaType, id } = useParams();
	const { data: credits } = useFetch(`${mediaType}/${id}/credits`);

	return (
		<>
			<Navbar />
			<section className="pt-24 w-full min-h-[600px] relative overflow-hidden">
				<DetailBenner credits={credits} />
			</section>
			<Footer />
		</>
	);
};

export default DetailPage;
