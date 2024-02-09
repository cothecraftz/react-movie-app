import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataApi } from '../utils/api';
import Navbar from '../components/Atom/Navbar';
import Footer from '../components/Molecules/Footer';
import ContentWrapper from '../components/Atom/ContentWrapper';
import LoaderDetail from '../components/Atom/LoaderDetail';
import SearchMovieCard from '../components/Molecules/SearchMovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchResults = () => {
	const [data, setData] = useState(null);
	const [pageNum, setPageNum] = useState(1);
	const [loading, setLoading] = useState(false);
	const { query } = useParams();

	const fecthInitialdataQuery = () => {
		setLoading(true);
		fetchDataApi(`search/multi?query=${query}&page=${pageNum}`).then((res) => {
			setData(res);
			setPageNum((res) => res + 1);
			setLoading(false);
		});
	};

	const fecthInitialNextdataQuery = () => {
		fetchDataApi(`search/multi?query=${query}&page=${pageNum}`).then((res) => {
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

	useEffect(() => {
		setPageNum(1);
		fecthInitialdataQuery();
	}, [query]);

	return (
		<>
			<Navbar />
			<ContentWrapper>
				{!loading ? (
					<section className="w-full min-h-screen pt-20 mb-20">
						{data?.results?.length > 0 ? (
							<div className="h-fit">
								<p className="text-slate-200 mb-4 text-lg italic font-medium">{`Search ${
									data?.results?.length > 1 ? 'results' : 'result'
								} of '${query}'`}</p>
								<InfiniteScroll
									next={fecthInitialNextdataQuery}
									dataLength={data?.results?.length || []}
									loader={<LoaderDetail />}
									hasMore={pageNum <= data?.total_pages}
									className="search-card-wrapper"
								>
									{data?.results?.map((item, index) => {
										if (item.media_type === 'person') return;
										return <SearchMovieCard key={index} data={item} />;
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

export default SearchResults;
