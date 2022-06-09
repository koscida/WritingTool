import React from "react"
import { NavLink } from "react-router-dom"

const Card = ({card: {image, title, text, links}}) => (
	<div className="card">
		{image &&  <img src={image}s class="card-img-top" alt={title} />}
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			{text && text.map( (tex, i) => <p className="card-text" key={i}>{tex}</p>)}
			{links && links.map(({link, text}, i) => 
				<NavLink to={link} activeclassname="active" className='card-link' key={i}>{text}</NavLink>
			)}
		</div>	
	</div>
)

export default Card