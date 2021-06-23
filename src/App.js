import { useState, useEffect } from "react";
// import { movies } from "./assets/movies";
import BookData from "./assets/data.json";
// import { BookData } from "./assets/data.js";
import { SearchBar } from "./components/SearchBar";

function App() {
	useEffect(() => {});

	return (
		<div className="App">
			<p className="instructions">
				author:[author name] country:[country name]
			</p>
			<div className="search-container">
				<h2>React Search Bar</h2>
				<SearchBar data={BookData} />
			</div>
		</div>
	);
}

export default App;
