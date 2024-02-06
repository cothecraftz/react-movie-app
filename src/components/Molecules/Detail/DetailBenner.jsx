import ContentWrapper from '../../Atom/ContentWrapper';
import Img from '../../LazyLoadImages/Img';
import PropTypes from 'prop-types';
import Genres from '../../Atom/Genres';
import Rating from '../../Atom/Rating';
import PosterFallback from '../../../assets/images/no-poster.png';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const DetailBenner = ({ credits }) => {
	const { mediaType, id } = useParams();
	const { data, loading } = useFetch(`${mediaType}/${id}`);
	const { url } = useSelector((state) => state.home);

	const director = credits?.crew.filter((d) => d.job === 'Director');
	const writter = credits?.crew.filter(
		(w) => w.job === 'Screenplay' || w.job === 'Story' || w.job === 'Writer'
	);

	const toHoursAndMinutes = (totalMinutes) => {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
	};

	console.log(data);
	return (
		<>
			{!loading ? (
				<React.Fragment>
					{!!data && (
						<>
							<div className="backdrop__img absolute top-0 left-0 w-full h-full">
								<Img src={url.backdrop + data.backdrop_path} />
							</div>
							<div className="layer__opacity"></div>
							<ContentWrapper>
								<div className="w-full flex md:flex-col gap-8 relative">
									<div className="detail__left w-[300px] h-[450px] md:w-full md:h-auto overflow-hidden rounded-xl">
										{data.poster_path ? (
											<Img src={url.backdrop + data.poster_path} />
										) : (
											<Img src={PosterFallback} />
										)}
									</div>
									<div className="flex-1 relative">
										<h1 className="text-light text-2xl font-semibold">
											{' '}
											{`${data.name || data.title} (${dayjs(data?.release_date).format(
												'YYYY'
											)})`}
										</h1>
										<p className="text-slate-500 text-sm italic font-medium">
											{data.tagline || "don't have tagline"}
										</p>
										<div className="flex gap-2 py-4">
											<Genres data={data.genres} />
										</div>
										<div className="w-12 h-12 rounded-full my-2 overflow-hidden bg-light">
											<Rating rating={data.vote_average.toFixed(1)} />
										</div>
										<p className="text-light text-sm">
											<strong className="text-lg mb-2">Overview</strong>
											<br />
											{data.overview}
										</p>
										{data.status && (
											<div className="info">
												<p>
													<strong className="text-base">Status : </strong>
													<span className="text-sm">{data.status}</span>
												</p>
											</div>
										)}
										{data?.number_of_episodes && (
											<div className="info">
												<p>
													<strong className="text-base">Total Episode : </strong>
													<span className="text-sm">{data.number_of_episodes}</span>
												</p>
											</div>
										)}
										{data?.number_of_seasons && (
											<div className="info">
												<p>
													<strong className="text-base">Total Season : </strong>
													<span className="text-sm">{data.number_of_seasons}</span>
												</p>
											</div>
										)}
										{data?.runtime && (
											<div className="info">
												<p>
													<strong className="text-base">Runtime : </strong>
													<span className="text-sm">
														{data.runtime ? toHoursAndMinutes(data.runtime) : '-'}
													</span>
												</p>
											</div>
										)}
										{director?.length > 0 && (
											<div className="info">
												<p>
													<strong className="text-base">Director : </strong>

													{director.map((d, i) => (
														<span key={i} className="text-sm">
															{d.name ? d.name : '-'}
															{director.length - 1 !== i && ', '}
														</span>
													))}
												</p>
											</div>
										)}
										{writter?.length > 0 && (
											<div className="info">
												<p>
													<strong className="text-base">Writter : </strong>
													{writter.map((w, i) => (
														<span key={i} className="text-sm">
															{w.name ? w.name : '-'}
															{writter.length - 1 !== i && ', '}
														</span>
													))}
												</p>
											</div>
										)}
										{data?.created_by?.length > 0 && (
											<div className="info">
												<p>
													<strong className="text-base">Created : </strong>
													{data?.created_by?.map((c, i) => (
														<span key={i} className="text-sm">
															{c.name ? c.name : '-'}
															{data.created_by.length - 1 !== i && ', '}
														</span>
													))}
												</p>
											</div>
										)}
									</div>
								</div>
							</ContentWrapper>
						</>
					)}
				</React.Fragment>
			) : (
				<div className="w-full h-full flex justify-center items-center">
					<div role="status">
						<svg
							aria-hidden="true"
							className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
		</>
	);
};

DetailBenner.propTypes = {
	credits: PropTypes.object,
};

export default DetailBenner;
