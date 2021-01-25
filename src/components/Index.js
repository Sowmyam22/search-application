import React, { useState, useEffect } from "react";
import axios from 'axios';
import Repositories from "./Repositories";

function Index() {
	const [searchedKeyword, setSearchedKeyword] = useState("");
	const [filteredRepositories, setFilteredRepositories] = useState([]);
	const [count, setCount] = useState();

	const handleSearchInput = (event) => {
		setSearchedKeyword(event.target.value);
	};

	const fetchRepositories = async (keyword) => {
		if (keyword) {
			let  apiEndPoint = `https://api.github.com/search/repositories?q=${keyword}`;

			let repositories = await axios.get(apiEndPoint);
			
			setCount(repositories.data.items.length);
			setFilteredRepositories(repositories.data.items)
			
		} else {
			setCount(0);
			setFilteredRepositories([]);
		}
	};

	const submitSearch = () => {
		fetchRepositories(searchedKeyword);
	};

	useEffect(() => {
		fetchRepositories(searchedKeyword);
	}, [searchedKeyword]); 

	return (
		<div>
			<div 
				className="flex justify-center py-10"
			>
			  <div 
			  	className="mt-1 flex rounded-md shadow-sm"
		  	>
			    <div 
			    	className="relative flex items-stretch flex-grow"
		    	>
			      <input 
			      	type="text" 
			      	name="email" 
			      	id="email" 
			      	className="block w-full rounded-none rounded-l-md pl-4 border border-gray-500" 
			      	placeholder="Search Repository..." 
			      	onChange={(e) => handleSearchInput(e)}
		      	/>
			    </div>

			    <button 
			    	className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-500 text-sm font-medium rounded-r-md text-gray-700 bg-gray-200 hover:bg-gray-100"
		    		onClick={submitSearch}
		    	>
			      <svg 
			      	className="h-6 w-6" 
			      	xmlns="http://www.w3.org/2000/svg" 
			      	fill="none" 
			      	viewBox="0 0 24 24" 
			      	stroke="currentColor"
		      	>
	  					<path 
	  						strokeLinecap="round" 
	  						strokeLinejoin="round" 
	  						strokeWidth="2" 
	  						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
							/>
						</svg>
			    </button>
			  </div>
			</div>

			{filteredRepositories.length ? (
				<>
					<h2 
						className="flex justify-center text-base font-semibold text-indigo-600 tracking-wide"
					>
						No. of results: {count}
					</h2>
					<div className="mx-auto px-64">
						<Repositories filteredRepositories={filteredRepositories} />
					</div>
				</>
			) : (
				<div className="flex justify-center">
					<div className="bg-yellow-50 border-l-4 border-yellow-400 p-2">
					  <div className="flex">
					    <div className="flex-shrink-0">
					      <svg 
					      	className="h-5 w-5 text-yellow-400" 
					      	xmlns="http://www.w3.org/2000/svg" 
					      	viewBox="0 0 20 20" 
					      	fill="currentColor" 
					      	aria-hidden="true"
				      	>
					        <path 
					        	fillRule="evenodd" 
					        	d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
					        	clipRule="evenodd" 
				        	/>
					      </svg>
					    </div>
					    <div className="ml-3">
					      <p className="text-sm text-yellow-700">
					        No repositories found
					      </p>
					    </div>
					  </div>
					</div>
				</div>
			)}
			<div></div>
		</div>
	)
}

export default Index;