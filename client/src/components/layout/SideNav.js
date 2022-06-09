import React from "react"
import { NavLink } from 'react-router-dom'

class SideNav extends React.Component {
	render() {
		const nav = [
			[
				{ 
					name: "Characters",
					link: "character",
					fa: 'fa-solid fa-person-dress',
				},{ 
					name: "Organizations",
					link: "organization",
					fa: 'fa-solid fa-people-group',
				},{ 
					name: "Religions",
					link: "religion",
					fa: 'fa-solid fa-place-of-worship',
				},{ 
					name: "Cultures",
					link: "culture",
					fa: 'fa-solid fa-people-line',
				},{ 
					name: "Objects",
					link: "object",
					fa: 'fa-solid fa-shapes',
				},
			],[
				{ 
					name: "Languages",
					link: "language",
					fa: 'fa-solid fa-language',
				},{ 
					name: "Magic Systems",
					link: "magic",
					fa: 'fa-solid fa-star-half-stroke',
				},{ 
					name: "Locations",
					link: "location",
					fa: 'fa-solid fa-location-dot',
				},{ 
					name: "Maps",
					link: "map",
					fa: 'fa-solid fa-map',
				},{ 
					name: "Timelines",
					link: "timeline",
					fa: 'fa-solid fa-timeline',
				},
			],[
				{ 
					name: "Character Arcs",
					link: "arc",
					fa: 'fa-solid fa-bars-staggered',
				},{ 
					name: "Relationships",
					link: "relationship",
					fa: 'fa-solid fa-handshake-simple',
				},{ 
					name: "Themes",
					link: "theme",
					fa: 'fa-solid fa-bolt-lightning',
				},{ 
					name: "Plots",
					link: "plot",
					fa: 'fa-solid fa-lightbulb',
				},{ 
					name: "Manuscript",
					link: "manuscript",
					fa: 'fa-solid fa-feather',
				},
			],[
				{ 
					name: "Configuration",
					link: "configuration",
					fa: 'fa-solid fa-gear',
				},
			],[
				{ 
					name: "Projects",
					fa: 'fa-solid fa-folder',
					links : [
						{
							name: 'New project...',
							link: "/new-project",
						},{
							name: 'Project 2',
							link: "/project/2",
						},{
							name: 'Project 3',
							link: "/project/1",
						},
					],
				},
				{ 
					name: "Profile",
					fa: 'fa-solid fa-user-gear',
					links: [
						{
							name: 'Profile',
							link: "/profile/profile",
						},{
							name: 'Settings',
							link: "/profile/settings",
						},{
							name: 'Sign out',
							link: "/profile/sign-out",
						}
					],
				},
			],
		]
		
		return (
			<div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end overflow-scroll" style={{width: "260px"}}>
				
				<a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
					<i className="fs-4 me-3 text-center fa-solid fa-house" style={{width: "25px"}}></i>
					<span className="fs-4">Home</span>
				</a>
				
				<div className="list-group list-group-flush scrollarea">
					{nav.map( (section,i) => (
						<ul className={"nav nav-pills flex-column border-bottom py-3"} key={i}>
							{section.map( (navItem, j) => {
								const {name, fa} = navItem
								const liClasses = 'nav-item' + (navItem.links ? " dropdown" : '')
								const navLinkClasses = 'nav-link link-dark' + (navItem.links ? " d-flex align-items-center text-decoration-none dropdown-toggle" : '')
								return (
								<li className={liClasses} key={j}>
									{navItem.link && 
										<NavLink to={navItem.link} activeclassname="active" className='nav-link link-dark'>
											<i className={'me-3 text-center ' + fa} style={{width: "25px", maxHeight: "25px"}}></i>
											{name}
										</NavLink>
									}
									{navItem.links && <>
										<a href="#" className="nav-link link-dark d-flex align-items-center text-decoration-none dropdown-toggle" id={"dropdownUser"+j} data-bs-toggle="dropdown" aria-expanded="false">
											<i className={'me-3 text-center ' + fa} style={{width: "25px", maxHeight: "25px"}}></i>
											{name}
										</a>
										<ul className="dropdown-menu text-small shadow" aria-labelledby={"dropdownUser"+j}>
											{navItem.links.map( ({name, link}, k) => (
												<li key={k}>
													<NavLink to={link} activeclassname="active" className='dropdown-item'>
														{name}
													</NavLink>
												</li>
											))}
										</ul>
									</>}
								</li>
							)})}
						</ul>
					))}
				</div>
				
			</div>
		)
	}
}

export default SideNav;
