import React from "react"

const Card = ({card: {image, title, text, links}}) => (
	<div className="card">
		{image &&  <img src={image} class="card-img-top" alt={title} />}
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			{text && text.map( (tex, i) => <p className="card-text" key={i}>{tex}</p>)}
			{links && links.map(({link, text}, i) => <a href={link} className="card-link" key={i}>{text}</a>)}
		</div>	
	</div>
)

export default Card