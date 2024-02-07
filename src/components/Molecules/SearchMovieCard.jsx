import PropTypes from 'prop-types';
import Img from '../LazyLoadImages/Img';
import { useSelector } from 'react-redux';
import PosterCard from '../../assets/images/no-poster.png';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const SearchMovieCard = ({ data }) => {
	const { url } = useSelector((state) => state.home);
	const navigate = useNavigate();
	return (
		<div className="w-full">
			<div
				onClick={() => navigate(`/${data.media_type}/${data.id}`)}
				className="w-full aspect-[1/1.5] overflow-hidden rounded-md cursor-pointer"
			>
				<Img src={data?.poster_path ? url.poster + data?.poster_path : PosterCard} />
			</div>
			<div>
				<h1 className="text-light line-clamp-1 text-base font-semibold mt-1">
					{data?.title || data?.name}
				</h1>
				<p className="text-slate-400 text-sm">
					{dayjs(data.release_date || data.first_air_date).format('MMM D, YYYY')}
				</p>
			</div>
		</div>
	);
};

SearchMovieCard.propTypes = {
	data: PropTypes.object,
};

export default SearchMovieCard;
