import React from "react"
import './styles/App.css';
import axios from 'axios'

class App extends React.Component {
	state = {
		data: ""
	}
	
	componentDidMount() {
		const url = 'http://localhost:3000/api'
		axios
		.get(url)
		.then(({data}) => {
			console.log(data)
			this.setState({data})
		})
		.catch((error) => {
			console.log(error)
		})
	}
	
	render() {
		return (
			<div className="App">
				<h1>Hello {this.state.data.name}!</h1>
			</div>
		)
	}
}

export default App;
