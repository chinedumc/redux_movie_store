import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../movieListing/movieListing.component";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
	const dispatch = useDispatch();
	const movieText = 'Harry'
	const showText = 'Friends'
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText));
		dispatch(fetchAsyncShows(showText));
	}, [dispatch]);

	return (
		<div>
			<div className="banner-image">
				<MovieListing />
			</div>
		</div>
	);
};

export default Home;
