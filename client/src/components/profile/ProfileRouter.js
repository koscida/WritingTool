import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Outlet,
} from 'react-router-dom'

import NotFound from '../layout/NotFound'

import Profile from './Profile'
import Settings from './Settings'
import SignOut from './SignOut'

const ProfileRouter = () => <>
	<Routes>
		<Route index element={<Profile />} />
		
		<Route path='profile' element={<Profile />} />
		<Route path='settings' element={<Settings />} />
		<Route path='sign-out' element={<SignOut />} />
		
		<Route path="*" element={<NotFound />} />
	</Routes>
	
	<Outlet />
</>

export default ProfileRouter;