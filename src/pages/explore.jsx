import { useParams } from 'react-router-dom';
import { fetchDataApi } from '../utils/api';
import { useEffect, useState } from 'react';
// import useFetch from '../hooks/useFetch';
import LoaderDetail from '../components/Atom/LoaderDetail';
import SearchMovieCard from '../components/Molecules/SearchMovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import ContentWrapper from '../components/Atom/ContentWrapper';
import Navbar from '../components/Atom/Navbar';
import Footer from '../components/Molecules/Footer';
import Select from 'react-select';
import useFetch from '../hooks/useFetch';

// ak gak tau kenapa tapi ini harus di luar, klo ini didalam sortby nya gak fungsi
let filters = {};

const ExplorePage = () => {
	const { mediaType } = useParams();
	const [genre, setGenre] = useState(null);
	const [sortby, setSortby] = useState(null);
	const [loading, setLoading] = useState(false);
	const [pageNum, setPageNum] = useState(1);
	const [data, setData] = useState(null);

	const sortbyData = [
		{ value: 'popularity.desc', label: 'Popularity Descending' },
		{ value: 'popularity.asc', label: 'Popularity Ascending' },
		{ value: 'vote_average.desc', label: 'Rating Descending' },
		{ value: 'vote_average.asc', label: 'Rating Ascending' },
		{
			value: 'primary_release_date.desc',
			label: 'Release Date Descending',
		},
		{ value: 'primary_release_date.asc', label: 'Release Date Ascending' },
		{
			value: mediaType === 'movie' ? 'original_title.asc' : 'original_name.asc',
			label: 'Title (A-Z)',
		},
	];

	const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

	const fecthInitialData = () => {
		setLoading(true);
		fetchDataApi(`discover/${mediaType}`, filters).then((res) => {
			setData(res);
			setPageNum((res) => res + 1);
			setLoading(false);
		});
	};

	const fecthInitialnextData = () => {
		fetchDataApi(`discover/${mediaType}?page=${pageNum}`, filters).then((res) => {
			if (data?.results) {
				setData({
					...data,
					results: [...data.results, ...res.results],
				});
			} else {
				setData(res);
			}
			setPageNum((res) => res + 1);
		});
	};

	const onChange = (selectItem, action) => {
		if (action.name === 'sortby') {
			setSortby(selectItem);
			if (action.action !== 'clear') {
				// sort_by ini berasal rai url apinya
				filters.sort_by = selectItem.value;
			} else {
				delete filters.sort_by;
			}
		}
		if (action.name === 'genre') {
			setGenre(selectItem);
			console.log(selectItem);
			if (action.action !== 'clear') {
				let genreId = selectItem.map((g) => g.id);
				genreId = JSON.stringify(genreId).slice(1, -1);
				// with_genres ini berasal rai url apinya
				filters.with_genres = genreId;
			} else {
				delete filters.with_genres;
			}
		}
		setPageNum(1);
		fecthInitialData();
	};

	console.log(filters);

	useEffect(() => {
		filters = {};
		sortbyData;
		setPageNum(1);
		setGenre(null);
		setSortby(null);
		setData(null);
		fecthInitialData();
	}, [mediaType]);

	return (
		<>
			<Navbar />
			<ContentWrapper>
				<div className="container pt-20 flex md:flex-col justify-end gap-4">
					<Select
						name="genre"
						value={genre}
						isMulti
						placeholder="Select Genre"
						options={genresData?.genres}
						getOptionLabel={(option) => option.name}
						getOptionValue={(option) => option.id}
						onChange={onChange}
						closeMenuOnSelect={false}
						classNamePrefix="select"
						className="select-option multy"
					/>
					<Select
						name="sortby"
						value={sortby}
						placeholder="Sort by"
						options={sortbyData}
						onChange={onChange}
						isClearable={true}
						classNamePrefix="select"
						className="select-option single"
					/>
				</div>
				{!loading ? (
					<section className="w-full min-h-screen pt-2 mb-20">
						{data?.results?.length > 0 ? (
							<div className="h-fit">
								<p className="text-slate-200 mb-4 text-lg italic font-medium"></p>
								<InfiniteScroll
									next={fecthInitialnextData}
									dataLength={data?.results?.length || []}
									loader={<LoaderDetail />}
									hasMore={pageNum <= data?.total_pages}
									className="search-card-wrapper"
								>
									{data?.results?.map((item, index) => {
										if (item.media_type === 'person') return;
										return <SearchMovieCard mediaType={mediaType} key={index} data={item} />;
									})}
								</InfiniteScroll>
							</div>
						) : (
							<span className="text-pink mb-4 text-lg italic font-medium">
								Sorry, Results not found!
							</span>
						)}
					</section>
				) : (
					<section className="w-full min-h-screen flex items-center justify-center">
						<LoaderDetail />
					</section>
				)}
			</ContentWrapper>
			<Footer />
		</>
	);
};

export default ExplorePage;
