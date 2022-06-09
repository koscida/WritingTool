import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Outlet,
} from 'react-router-dom'


import Home from './Home'
import Language from './Language'
import Dictionary from './Dictionary'
import Phonetics from './Phonetics'
import Grammar from './Grammar'
import Pragmatics from './Pragmatics'

import NotFound from '../../layout/NotFound'

const LanguageRouter = () => <>
	<Routes>
		<Route index element={<Home />} />
		
		<Route path=":id/*" element={<Language />}>
			<Route index element={<Dictionary />} />
			<Route path="dictionary" element={<Dictionary />} />
			<Route path="phonetics" element={<Phonetics />} />
			<Route path="grammar" element={<Grammar />} />
			<Route path="pragmatics" element={<Pragmatics />} />
			<Route path="*" element={<NotFound />} />
		</Route>
		
		<Route path="*" element={<NotFound />} />
	</Routes>
	
	<Outlet />
</>

export default LanguageRouter;