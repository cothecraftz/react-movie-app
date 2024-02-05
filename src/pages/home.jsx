import Navbar from '../components/Atom/Navbar';
import Header from '../components/Molecules/Header/Header';
import Popular from '../components/Molecules/MainContent/Popular';
import TopRate from '../components/Molecules/MainContent/TopRate';
import Trending from '../components/Molecules/MainContent/trending';

const Homepage = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Trending />
			<Popular />
			<TopRate />
		</>
	);
};

export default Homepage;
