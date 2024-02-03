import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropType from 'prop-types';

const Img = ({ className, src }) => {
	return <LazyLoadImage className={className || ''} alt="" effect="" src={src} />;
};

Img.propTypes = {
	className: PropType.string,
	src: PropType.string,
};

export default Img;
