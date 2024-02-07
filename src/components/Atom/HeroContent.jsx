import { useNavigate } from 'react-router-dom';
import InputSearch from './InputSearch';
import { useState } from 'react';

const HeroContent = () => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const searchQueryBtn = () => {
		if (query.length > 0) {
			navigate(`/search/${query}`);
			setQuery('');
		}
	};
	const searchQuery = (e) => {
		if (e.key === 'Enter' && query.length > 0) {
			navigate(`/search/${query}`);
			setQuery('');
		}
	};
	return (
		<div className="max-w-[800px] mx-auto h-full flex flex-col justify-center items-center">
			<h1 className="text-light text-7xl sm:text-6xl font-bold mb-1 sm:mb-2 text-center px-4">
				Welcome.
			</h1>
			<p className="text-light text-base sm:text-sm px-4 mb-7 sm:mb-8 text-center">
				Millions of movies, TV shows and poople to discover. Explore now.
			</p>
			<div className="w-full px-8 sm:px-4">
				<InputSearch
					onClick={searchQueryBtn}
					value={query}
					onKeyUp={searchQuery}
					onChange={(e) => setQuery(e.target.value)}
					className="w-full"
				/>
			</div>
		</div>
	);
};

export default HeroContent;
