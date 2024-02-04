import { fetchDataApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		apiConfiguration();
	}, []);

	const apiConfiguration = () => {
		fetchDataApi('/configuration').then((res) => {
			// console.log(res);
			const url = {
				poster: res.images.secure_base_url + 'original',
				backdrop: res.images.secure_base_url + 'original',
				profile: res.images.secure_base_url + 'original',
			};
			dispatch(getApiConfiguration(url));
		});
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
