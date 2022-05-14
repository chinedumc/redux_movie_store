import { useEffect } from "react";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import MovieListing from "../movieListing/movieListing.component";

const Home = () => {
	useEffect(() => {
		const movieText = "Harry";
		const fetchMovies = async () => {
			const response = await MovieApi
      .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
				console.log("Error: ", err);
			});
			console.log("API response ", response);
		};
		fetchMovies();
	}, []);

	return (
		<div>
			<div className="banner-image">
				<MovieListing />
			</div>
		</div>
	);
};

export default Home;
