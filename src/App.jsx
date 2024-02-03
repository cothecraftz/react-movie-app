import { useEffect } from 'react';
import { fetchDataApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

function App() {
	const dispatch = useDispatch();
	const { url } = useSelector((state) => state.home);
	const { genres } = useSelector((state) => state.home);

	console.log(url);
	console.log(genres);

	useEffect(() => {
		apiTesting();
	}, []);

	const apiTesting = () => {
		fetchDataApi('/movie/popular').then((res) => {
			dispatch(getApiConfiguration(res));
		});
		fetchDataApi('/genre/movie/list').then((res) => {
			dispatch(getGenres(res));
		});
	};

	return (
		<div>
			<h1></h1>
		</div>
	);
}

export default App;
