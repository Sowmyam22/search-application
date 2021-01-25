import React from "react";
import moment from "moment";

function Repositories({ filteredRepositories }) {
	return (
		filteredRepositories.map((repo, index) => {
			return (
				<div 
					key={index} 
					className="bg-green-100 border shadow sm:rounded-lg my-5"
				>
				  <div 
				  	className="px-4 py-5 sm:p-6"
			  	>
				  	<div 
				  		className="mt-3 text-base flex items-center justify-between"
			  		>
				      <a 
				      	href={repo.html_url}
				      	target="_blank" 
				      	className="font-medium text-indigo-600 hover:text-indigo-500"
			      	> 
			      		{repo.html_url} 
		      			<span aria-hidden="true">
	      					&rarr;
      					</span>
    					</a>

				      <svg 
				      	className="h-4 w-4" 
				      	xmlns="http://www.w3.org/2000/svg" 
				      	viewBox="0 0 20 20" 
				      	fill="orange"
			      	>
  							<path 
  								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
								/>
							</svg>
				    </div>

				    <div className="mt-3 max-w-xl text-sm text-gray-600">
				      <p>{repo.description}</p>
				    </div>

				    <div className="flex items-center mt-4">
              <img 
              	className="inline-block h-6 w-6 rounded-full" 
              	src={repo.owner.avatar_url} 
              	alt="" 
            	/>
            	<div className="ml-2">
                <p className="text-sm font-medium text-black">
                  {repo.owner.login}
                </p>
              </div>
            </div>

            <div className="text-xs text-gray-600">
            	Updated at: {moment(repo.updated_at).format("h:mm a, MMMM Do YYYY")}
            </div>
				  </div>
				</div>
			)
		})
	)
}

export default Repositories;