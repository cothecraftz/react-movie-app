import { fetchDataApi } from './utils/api';
import { getApiPopular } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';

function App() {
	const dispatch = useDispatch();
	const { url } = useSelector((state) => state.home);

	console.log(url);

	useEffect(() => {
		apitesting();
	}, []);

	const apitesting = () => {
		fetchDataApi('/movie/popular').then((res) => dispatch(getApiPopular(res)));
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
