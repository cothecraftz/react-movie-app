import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const Genres = ({ data }) => {
	const { genres } = useSelector((state) => state.home);
	return (
		<>
			{data?.length > 0 &&
				data?.map((item, index) => {
					const genreName = genres[item]?.name || 'Unknown Genre';
					if (!genreName.trim()) return null;
					return (
						<p
							key={index}
							className="genre text-light text-right font-medium w-fit rounded-[5px] px-2 py-1 text-xs whitespace-nowrap"
						>
							{genres[item]?.name || genres[item.id]?.name}
						</p>
					);
				})}
		</>
	);
};

Genres.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array, // array of genre IDs
		PropTypes.arrayOf(Object), // array of genre objects
	]),
};

export default Genres;
