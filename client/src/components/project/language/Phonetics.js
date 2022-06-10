import React from "react"
import IPA from './IPA/IPA'

class Phonetics extends React.Component {
	
	render() {
		return (
			<>
				<div className="row">
					<div className="col">
						<IPA />
					</div>
				</div>
				<div className="row d-grid" style={{gridTemplateColumns: 'repeat(5, 1fr)'}}>
					<div>Naive Symbol</div>
					<div>English Letter</div>
					<div>Type</div>
					<div>Sound</div>
					<div>IPA</div>
				</div>
			</>
		)
	}
}

export default Phonetics;