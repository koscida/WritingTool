import React from "react"
import { NavLink, Outlet } from 'react-router-dom'

class Language extends React.Component {
	
	render() {
		return (
			<div class="mb-3">
				<div className="d-flex flex-row align-items-start">
					<div class="m-2">
						<select class="form-select form-select-lg" aria-label="Default select example">
							<option selected value="1">Language 1</option>
							<option value="1">Language 2</option>
							<option value="2">Language 3</option>
							<option value="3">Language 4</option>
						</select>
					</div>
					
					<div class="m-2">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<NavLink to="dictionary" activeclassname="active" className='nav-link'>Dictionary</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="phonetics" activeclassname="active" className='nav-link'>Phonetics</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="grammar" activeclassname="active" className='nav-link'>Grammar</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="pragmatics" activeclassname="active" className='nav-link'>Pragmatics</NavLink>
							</li>
						</ul>
					</div>
					
				</div>
				<Outlet />
			</div>
		)
	}
}

export default Language;