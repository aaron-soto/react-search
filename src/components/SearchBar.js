import { useState } from "react";

export const SearchBar = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const handleClear = () => {
		setSearchTerm("");
		setFilteredData([]);
	};

	const handleFilter = (e) => {
		const searchWord = e.target.value;
		setSearchTerm(e.target.value);

		const newFilter = data.filter((value) => {
			if (searchWord.startsWith("author:")) {
				return value.author
					.toLowerCase()
					.includes(searchWord.replace("author:", "").toLowerCase());
			} else if (searchWord.startsWith("country:")) {
				return value.country
					.toLowerCase()
					.includes(searchWord.replace("country:", "").toLowerCase());
			} else if (searchWord.startsWith("language:")) {
				return value.language
					.toLowerCase()
					.includes(searchWord.replace("language:", "").toLowerCase());
			} else {
				return value.title.toLowerCase().includes(searchWord.toLowerCase());
			}
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	return (
		<div className="input-wrapper">
			{searchTerm.length > 0 && (
				<i onClick={handleClear} class="fas fa-times"></i>
			)}
			<input
				type="text"
				value={searchTerm}
				onChange={handleFilter}
				autocomplete="off"
				spellcheck="false"
				className="search-bar"
			/>
			{filteredData.length != 0 && (
				<ul className="search-items">
					{filteredData.slice(0, 15).map((value, idx) => {
						return (
							<div className="search-item" key={idx}>
								<a
									href={value.link}
									className="search-item-link"
									target="_blank"
								>
									<i class="fas fa-external-link-alt"></i>
								</a>
								<div className="item-info">
									<div className="item-title">{value.title}</div>
									<div className="item-author">{value.author}</div>
								</div>

								<div className="item-details">
									<span className="pagesCount">pages: {value.pages}</span>
									<span className="item-country">
										country: <span>{value.country}</span>
									</span>
								</div>
							</div>
						);
					})}
				</ul>
			)}
		</div>
	);
};
