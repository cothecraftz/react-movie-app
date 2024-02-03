import PropTypes from 'prop-types';

const InputSearch = ({ className }) => {
	return (
		<div
			className={`bg-light border border-orange shadow-lg rounded-full overflow-hidden flex items-center ${className}`}
		>
			<input
				className="w-5/6 bg-transparent h-full border-none outline-none indent-6 text-base font-semibold text-slate-700"
				type="text"
				name="search"
			/>
			<button
				type="button"
				className="btn__search w-1/6 h-full text-light text-base font-semibold"
			>
				Search
			</button>
		</div>
	);
};

InputSearch.propTypes = {
	className: PropTypes.string,
};

export default InputSearch;
