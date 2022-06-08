import React from "react"
	import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Outlet,
	} from 'react-router-dom'

import SideNav from './components/layout/SideNav'
import Home from './components/layout/Home'
import NotFound from './components/layout/NotFound'
import Manuscript from './components/manuscript/Manuscript'
import CharacterHome from './components/character/CharacterHome'
import CharacterView from './components/character/CharacterView'
import Location from './components/location/Location'

const CharacterRouter = () => <Outlet />

const App = () => <Router>
	<main className="container-flex app">
		<SideNav />
		<div className="overflow-scroll">
			<Routes>
				<Route element={<NotFound />} />
				<Route path='character' element={<CharacterRouter />}>
					<Route index element={<CharacterHome />} />
					<Route
						path=":id"
						element={<CharacterView />}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path='locations' element={<Location />} />
				<Route path='manuscript' element={<Manuscript />} />
				<Route exact path='/' element={<Home />} />
			</Routes>
		</div>
	</main>
</Router>

export default App;
