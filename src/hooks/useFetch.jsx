import { useEffect, useState } from 'react';
import { fetchDataApi } from '../utils/api';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [eror, setEror] = useState(null);

	useEffect(() => {
		setLoading(true);
		setData(null);
		setEror(null);

		fetchDataApi(url)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((err) => {
				setLoading(false);
				setEror('eror: ' + err);
			});
	}, [url]);

	return { data, loading, eror };
};

export default useFetch;
