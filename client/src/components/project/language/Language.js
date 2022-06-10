import React from "react"
import { NavLink, Outlet, useParams  } from 'react-router-dom'

const Language = (props) => {
	let { languageKey } = useParams();
	
	return <>
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
							Project {languageKey}
						</NavLink>
					</li>
					<li className="breadcrumb-item">
						<NavLink to='../'>
							Languages
						</NavLink>
					</li>
					<li className="breadcrumb-item active" aria-current="page">Language {languageKey}</li>
				</ol>
			</nav>
			<div className="mb-3">
				<div className="d-flex flex-row align-items-end">
					<div className="mb-2">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<NavLink to="phonetics" activeclassname="active" className='nav-link'>Phonetics</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="dictionary" activeclassname="active" className='nav-link'>Dictionary</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="grammar" activeclassname="active" className='nav-link'>Grammar</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="pragmatics" activeclassname="active" className='nav-link'>Pragmatics</NavLink>
							</li>
						</ul>
					</div>
					<div className="mb-2 ms-auto">
						<div className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Languages
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<NavLink to="../../language/1" activeclassname="active" className='dropdown-item'>Language 1</NavLink>
								</li>
								<li>
									<NavLink to="../../language/2" activeclassname="active" className='dropdown-item'>Language 2</NavLink>
								</li>
								<li>
									<NavLink to="../../language/3" activeclassname="active" className='dropdown-item'>Language 3</NavLink>
								</li>
								<li>
									<NavLink to="../../language/4" activeclassname="active" className='dropdown-item'>Language 4</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<Outlet />
	</>
}

export default Language;