import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropType from 'prop-types';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({ className, src }) => {
	return <LazyLoadImage className={className || ''} alt="" effect="blur" src={src} />;
};

Img.propTypes = {
	className: PropType.string,
	src: PropType.string,
};

export default Img;
