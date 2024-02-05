import PropTypes from 'prop-types';
import Img from '../LazyLoadImages/Img';
import dayjs from 'dayjs';

const Card = ({ data, src }) => {
	return (
		<div className="card">
			<div>
				<Img src={src} />
			</div>
			<div>
				<h2 className="text-light line-clamp-1 text-lg font-semibold mt-1">
					{data.title || data.name}
				</h2>
				<p className="text-slate-400 text-sm">
					{dayjs(data.release_date || data.first_air_date).format('MMM D, YYYY')}
				</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object,
	src: PropTypes.string,
};

export default Card;
