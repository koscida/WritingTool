import React from "react"
import {
	Route,
	Routes,
	NavLink,
	Outlet,
} from 'react-router-dom'


import Home from './Home'
import Character from './Character'

import NotFound from '../../layout/NotFound'

const CharacterRouter = () => <>
	<Routes>
		<Route index element={<Home />} />
		<Route exact path="/" element={<Home />} />
		
		<Route
			path=":id/*"
			element={<Character />}
		/>
		
		<Route path="*" element={<NotFound />} />
	</Routes>
	<Outlet />
</>

export default CharacterRouter;