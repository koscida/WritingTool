import React from "react"
import Card from '../../common/Card'

class Home extends React.Component {
	
	render() {
		return (
			<div>
				<div className="row">
					<div>
						<h1>Language Home</h1>
					</div>
				</div>
				<div className="row">
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
											links: [{link: '1', text:"Link"}]
										}}/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Home;