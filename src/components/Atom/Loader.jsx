import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Loader = () => {
	return (
		<div className="card h-[300px]">
			<SkeletonTheme baseColor="rgba(5, 21, 46, 0.9)" highlightColor="#c0c0c0c0">
				<Skeleton style={{ borderRadius: 8 }} height={250} />
			</SkeletonTheme>
		</div>
	);
};

export default Loader;
