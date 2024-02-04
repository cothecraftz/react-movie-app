import PropTypes from 'prop-types';

const Navlink = ({ children }) => {
	return (
		<div className="text-light font-medium hover:text-pink">
			<p className="cursor-pointer hover:underline">{children}</p>
		</div>
	);
};

Navlink.propTypes = {
	children: PropTypes.string,
};

export default Navlink;
