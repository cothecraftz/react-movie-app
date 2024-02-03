import InputSearch from './InputSearch';

const HeroContent = () => {
	return (
		<div className="absolute top-0 left-0 z-40 w-full h-full flex flex-col justify-center items-center">
			<h1 className="text-light text-7xl font-bold mb-1">Welcome.</h1>
			<p className="text-light text-base mb-7">
				Millions of movies, TV shows and poople to discover. Explore now.
			</p>
			{/* <div className="w-[630px] h-12 bg-light rounded-full overflow-hidden flex items-center">
				<input
					className="w-5/6 bg-transparent h-full border-none outline-none indent-6 text-base font-semibold text-slate-700"
					type="text"
					name="search"
				/>
				<button
					type="button"
					className="w-1/6 bg-[#c84b7b] h-full text-light text-sm font-semibold"
				>
					Search
				</button>
			</div> */}
			<InputSearch className="w-[730px] h-12" />
		</div>
	);
};

export default HeroContent;
