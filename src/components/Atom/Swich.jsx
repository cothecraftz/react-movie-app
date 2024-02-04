import { useState } from 'react';
import PropTypes from 'prop-types';
// const dataSwitch = ['Day', 'Week'];

const Swich = ({ dataSwitch, onTabChange }) => {
	const [swap, setSwap] = useState(0);
	const handleSwap = (item, index) => {
		setSwap(index);
		onTabChange(item, index);
	};
	return (
		<div className="w-44 h-10 px-1 bg-light flex items-center justify-between rounded-full overflow-hidden">
			{dataSwitch.map((item, index) => (
				<div
					key={index}
					onClick={() => handleSwap(item, index)}
					className={`swicth ${swap === index ? 'open' : ''}`}
				>
					{item}
				</div>
			))}
		</div>
	);
};

Swich.propTypes = {
	dataSwitch: PropTypes.array,
	onTabChange: PropTypes.func,
};

export default Swich;
