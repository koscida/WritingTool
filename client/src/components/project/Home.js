import React from "react"
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
	
	render() {
		return (
			<div>
				<div className="row">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<NavLink to='/'>
									Home
								</NavLink>
							</li>
							<li className="breadcrumb-item active" aria-current="page">Project 1</li>
						</ol>
					</nav>
				</div>
				<div className="row">
					<div>
						<h1>Home</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;