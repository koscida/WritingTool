import React from "react"

class Dictionary extends React.Component {
	
	render() {
		return (
			<>
				<div className="row">
					<div>
						<h1>Dictionary</h1>
					</div>
					<div className="row d-grid" style={{'gridTemplateColumns': 'repeat(4, 1fr);'}}>
						<p>Word</p>
						<p>[Calc] Pronunciation</p>
						<p>Pronunciation</p>
						<p>Definition</p>
					</div>
				</div>
			</>
		)
	}
}

export default Dictionary;