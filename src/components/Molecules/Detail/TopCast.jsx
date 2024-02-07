import PropTypes from 'prop-types';
import ContentWrapper from '../../Atom/ContentWrapper';
import { useSelector } from 'react-redux';
import Img from '../../LazyLoadImages/Img';
import avatar from '../../../assets/images/avatar.png';
const TopCast = ({ data }) => {
	const { url } = useSelector((state) => state.home);
	return (
		<>
			<ContentWrapper>
				<div className="mb-3">
					<p className="text-light text-xl font-bold">Top Cast</p>
				</div>
				<div className="card__wrapper">
					{data?.map((item, index) => {
						let avatarCast = item.profile_path ? url.profile + item.profile_path : avatar;
						return (
							<div key={index} className="w-[120px] flex flex-col items-center">
								<div className="w-full aspect-[1/1] overflow-hidden rounded-full mb-2">
									<Img src={avatarCast} />
								</div>
								<div className="text-center">
									<p className="text-light line-clamp-1">{item.name}</p>
									<p className="text-slate-500 text-sm">{item.character}</p>
								</div>
							</div>
						);
					})}
				</div>
			</ContentWrapper>
		</>
	);
};

TopCast.propTypes = {
	data: PropTypes.array,
};

export default TopCast;
