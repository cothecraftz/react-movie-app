import { useEffect, useRef, useState } from 'react';
import Navlink from './NavLink';
import { CgSearch } from 'react-icons/cg';

const Navbar = () => {
	const navRef = useRef(null);
	const [isScroll, setIsScroll] = useState(false);

	const handleScroll = () => {
		const top = navRef.current.offsetTop;
		const { scrollY } = window;
		if (scrollY > top) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			ref={navRef}
			className={`fixed top-0 left-0 z-50 w-full h-16 flex items-center ${
				isScroll ? 'visible' : ''
			}`}
		>
			<div className="container mx-auto flex justify-between">
				<h1 className="text-[#c84b7b] text-2xl font-bold">Movie</h1>
				<div className="flex items-center gap-4">
					<Navlink>Movies</Navlink>
					<Navlink>TV Shows</Navlink>
					<CgSearch className="text-light text-xl cursor-pointer" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
