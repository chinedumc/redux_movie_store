import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import MovieDetail from "./components/movieDetail/movieDetail.component";
import PageNotFound from "./components/pageNotFound/pageNotFound.component";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/movie/:imdbID" element={<MovieDetail />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
