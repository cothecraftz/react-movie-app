import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../Atom/ContentWrapper';
import Swich from '../../Atom/Swich';

import Carousel from '../Carousel';

const TopRate = () => {
	const [endPoint, setEndPoint] = useState('movie');
	const { data } = useFetch(`${endPoint}/top_rated`);

	const onTabChange = (item) => {
		setEndPoint(item === 'Movie' ? 'movie' : 'tv');
	};

	return (
		<div className="mb-20">
			<ContentWrapper>
				<div className="flex justify-between items-center mb-6">
					<p className="text-light text-xl font-bold">Top Rated</p>
					<Swich dataSwitch={['Movie', 'TV Series']} onTabChange={onTabChange} />
				</div>
				<Carousel data={data} endPoint={endPoint} />
			</ContentWrapper>
		</div>
	);
};
export default TopRate;
