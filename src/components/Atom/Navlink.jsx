import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navlink = ({ children, to }) => {
	return (
		<div className="text-light font-medium">
			<NavLink to={to}>{children}</NavLink>
		</div>
	);
};

Navlink.propTypes = {
	children: PropTypes.string,
	to: PropTypes.string,
};

export default Navlink;
