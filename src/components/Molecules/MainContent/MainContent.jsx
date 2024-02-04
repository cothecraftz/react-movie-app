import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../Atom/ContentWrapper';
import Swich from '../../Atom/Swich';
import Img from '../../LazyLoadImages/Img';
import { useSelector } from 'react-redux';
import PosterFallback from '../../../assets/images/no-poster.png';
import dayjs from 'dayjs';

// const dataSwitchTrending = ;

const MainContent = () => {
	const [endPoint, setEndPoint] = useState('day');
	const { data } = useFetch(`trending/movie/${endPoint}`);
	const { url, loading } = useSelector((state) => state.home);

	const onTabChange = (item) => {
		setEndPoint(item === 'Day' ? 'day' : 'week');
	};

	console.log(data);

	const Load = () => {
		return (
			<div className="card w-[200px] h-[300px]">
				<div className="">
					<Img src={PosterFallback} />
				</div>
				<div>
					<h2 className="text-light line-clamp-1 text-base font-semibold mt-1"></h2>
					<p className="text-slate-400 text-sm"></p>
				</div>
			</div>
		);
	};

	return (
		<ContentWrapper>
			<div className="flex justify-between items-center mb-6">
				<p className="text-light text-2xl font-bold">Trending</p>
				<Swich dataSwitch={['Day', 'Week']} onTabChange={onTabChange} />
			</div>
			{!loading ? (
				<div className="card__wrapper">
					{data?.results?.map((item) => {
						const posterUrl = item.poster_path
							? url.poster + item.poster_path
							: PosterFallback;
						return (
							<div key={item.id} className="card">
								<div className="">
									<Img src={posterUrl} />
								</div>
								<div>
									<h2 className="text-light line-clamp-1 text-base font-semibold mt-1">
										{item.title || item.name}
									</h2>
									<p className="text-slate-400 text-sm">
										{dayjs(item.release_date || item.first_air_date).format('MMM D, YYYY')}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="card__wrapper">
					{Load()}
					{Load()}
					{Load()}
					{Load()}
					{Load()}
					{Load()}
				</div>
			)}
		</ContentWrapper>
	);
};
export default MainContent;
