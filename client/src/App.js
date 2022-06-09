import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Outlet,
} from 'react-router-dom'

import Home from './components/layout/Home'

import ProjectRouter from './components/project/ProjectRouter'
import ProfileRouter from './components/profile/ProfileRouter'

import NotFound from './components/layout/NotFound'


const App = () => <Router>
	<Routes>
		<Route index element={<Home />} />
		<Route exact path='/' element={<Home />} />
		
		<Route path='project/*' element={<ProjectRouter />} />
		<Route path='profile/*' element={<ProfileRouter />} />
		
		<Route element={<NotFound />} />
	</Routes>
</Router>

export default App;
