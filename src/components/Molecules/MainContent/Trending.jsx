import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../Atom/ContentWrapper';
import Swich from '../../Atom/Swich';
import Carousel from '../Carousel';

const Trending = () => {
	const [endPoint, setEndPoint] = useState('day');
	const { data } = useFetch(`trending/movie/${endPoint}`);

	const onTabChange = (item) => {
		setEndPoint(item === 'Day' ? 'day' : 'week');
	};

	return (
		<div className="mb-20">
			<ContentWrapper>
				<div className="flex justify-between items-center mb-6">
					<p className="text-light text-xl font-bold">Trending</p>
					<Swich dataSwitch={['Day', 'Week']} onTabChange={onTabChange} />
				</div>
				<Carousel data={data} endPoint={endPoint} />
			</ContentWrapper>
		</div>
	);
};
export default Trending;
