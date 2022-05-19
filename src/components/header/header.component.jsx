import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from "../../features/movies/movieSlice";
import user from "../../images/blank-profile-picture.png";
import "./header.styles.scss";

const Header = () => {
	const [term, setTerm] = useState("");
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
    if (term === '') return alert("Please enter a search term")
		dispatch(fetchAsyncMovies(term));
		dispatch(fetchAsyncShows(term));
		setTerm("");
	};

	return (
		<div className="header">
			<div className="logo">
				<Link to="/">MovieApp</Link>
			</div>
			<div className="search-bar">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Enter Movie or Show"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
					<button>
						{" "}
						<i className="fa fa-search"></i>{" "}
					</button>
				</form>
			</div>
			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};

export default Header;
