import { useEffect, useRef, useState } from 'react';
import Navlink from './NavLink';
import { CgSearch } from 'react-icons/cg';
import InputSearch from './InputSearch';

const Navbar = () => {
	const navRef = useRef(0);
	const [isScroll, setIsScroll] = useState(true);
	const [isSearch, setIsSearch] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollY } = window;
			if (scrollY > navRef.current) {
				setIsScroll(false);
				setIsSearch(false);
			} else if (scrollY < navRef.current) {
				// setIsSearch(true);
				setIsScroll(true);
			}
			navRef.current = scrollY;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 z-50 w-full h-16 flex items-center shadow-sm ${
				isScroll ? 'visible' : ''
			}`}
		>
			<div className="container flex justify-between">
				<h1 className="logo  bg-clip-text text-2xl uppercase font-bold">layarkaca21</h1>
				<div className="flex items-center gap-6">
					<Navlink>Movies</Navlink>
					<Navlink>TV Shows</Navlink>
					<CgSearch
						onClick={() => setIsSearch(!isSearch)}
						className="text-light text-xl cursor-pointer search__icon"
					/>
					<div>
						<InputSearch
							className={`absolute top-20 w-[650px] h-12 right-1/2 translate-x-1/2 opacity-0 -translate-y-2 ${
								isSearch ? 'open' : ''
							}`}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
