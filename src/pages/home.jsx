import Navbar from '../components/Atom/Navbar';
import Footer from '../components/Molecules/Footer';
import Header from '../components/Molecules/Header/Header';
import Popular from '../components/Molecules/MainContent/Popular';
import TopRate from '../components/Molecules/MainContent/TopRate';
import Trending from '../components/Molecules/MainContent/Trending';

const Homepage = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Trending />
			<Popular />
			<TopRate />
			<Footer />
		</>
	);
};

export default Homepage;
