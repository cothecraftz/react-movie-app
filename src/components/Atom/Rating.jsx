import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
	return (
		<>
			<CircularProgressbar
				value={rating}
				text={rating}
				maxValue={10}
				strokeWidth={10}
				styles={buildStyles({
					textSize: '27px',
					pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
				})}
			/>
		</>
	);
};

Rating.propTypes = {
	rating: PropTypes.string,
};

export default Rating;
