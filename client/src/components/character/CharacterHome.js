import React from "react"
import { Outlet } from "react-router-dom";

import Card from '../common/Card'

class CharacterHome extends React.Component {
	render() {
		return (
			<>
				{["Favorites","Recently Edited","Most Edited"].map( (header, i) => (
					<div className="row mx-0 mb-2" key={i}>
						<div className="col-12">
							<h1>{header}</h1>
						</div>
						<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 my-0 g-3">
							{[...Array(4).keys()].map( (x, i) => (
								<div className="col" key={i}>
									<Card card={{
										title: "Card Title",
										text: ['Some quick example text to build on the card title and make up the bulk of the cards content.'],
										links: [{link: '/character/1', text:"Link"}]
									}}/>
								</div>
							))}
						</div>
					</div>
				))}
				
				<div className="row mx-0 mb-2">
					<div className="col-12 d-flex align-items-center">
						<h1>Characters</h1>
						<ul className="nav nav-tabs ms-3">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">All</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Grouping</a>
							</li>
						</ul>
					</div>
					<div className="d-flex mb-2">
						<input type="text" className="form-control flex-grow" placeholder="Search" />
						<i className="fa-solid fa-arrow-down-a-z m-2 fs-5"></i>
						<i className="fa-solid fa-arrow-down-1-9 m-2 fs-5"></i>
						<i className="fa-solid fa-filter m-2 fs-5"></i>
					</div>
					<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 my=0 g-3">
						{[...Array(20).keys()].map( (x, i) => (
							<div className="col" key={i}>
								<Card card={{
									title: "Card Title",
									text: ['Some quick example text to build on the card title and make up the bulk of the cards content.'],
									links: [{link: '/character/1', text:"Link"}]
								}}/>
							</div>
						))}
					</div>
				</div>
			</>
		)
	}
}

export default CharacterHome;