import { useEffect, useState } from 'react';
import HeroContent from '../../Atom/HeroContent';
import Navbar from '../../Atom/Navbar';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../LazyLoadImages/Img';

const Header = () => {
	const [background, setBackground] = useState('');
	const { url } = useSelector((state) => state.home);
	const { data, loading } = useFetch('/movie/upcoming');

	console.log(loading);

	useEffect(() => {
		console.log(data);
		const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg);
	}, [data, url]);

	return (
		<header className="relative w-full h-[650px] mb-96 overflow-hidden">
			<Navbar />
			<Img
				className="object-cover object-center w-full h-full absolute"
				src={`${background}`}
			/>
			<section className="container h-[600px] flex justify-center items-center">
				<HeroContent />
			</section>
		</header>
	);
};

export default Header;
