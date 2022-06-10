import React from "react"
import { NavLink } from 'react-router-dom';

class Character extends React.Component {
	
	render() {
		return (
			<>
				<div className="row">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<NavLink to='/'>
									Home
								</NavLink>
							</li>
							<li className="breadcrumb-item">
								<NavLink to='../../'>
									Project 1
								</NavLink>
							</li>
							<li className="breadcrumb-item">
								<NavLink to='../'>
									Characters
								</NavLink>
							</li>
							<li className="breadcrumb-item active" aria-current="page">Character 1</li>
						</ol>
					</nav>
				</div>
				<div className="row">
					<div>
						<h1>Character Name</h1>
						<h2>Affilitation</h2>
					</div>
				</div>
			</>
		)
	}
}

export default Character;