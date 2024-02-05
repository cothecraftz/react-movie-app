import React, { useState, Suspense } from 'react';
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../Atom/ContentWrapper';
import Swich from '../../Atom/Swich';
import { useSelector } from 'react-redux';
import PosterFallback from '../../../assets/images/no-poster.png';
import Loader from '../../Atom/Loader';
const Card = React.lazy(() => import('../Card'));

const Trending = () => {
	const [endPoint, setEndPoint] = useState('day');
	const { data } = useFetch(`trending/movie/${endPoint}`);
	const { url } = useSelector((state) => state.home);

	const onTabChange = (item) => {
		setEndPoint(item === 'Day' ? 'day' : 'week');
	};

	console.log(data);

	return (
		<ContentWrapper>
			<div className="flex justify-between items-center mb-6">
				<p className="text-light text-2xl font-bold">Trending</p>
				<Swich dataSwitch={['Day', 'Week']} onTabChange={onTabChange} />
			</div>

			<div className="card__wrapper">
				{data?.results?.map((item) => {
					const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
					return (
						<Suspense key={item.id} fallback={<Loader />}>
							<Card data={item} src={posterUrl} />
						</Suspense>
					);
				})}
			</div>
		</ContentWrapper>
	);
};
export default Trending;
