import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Navigate,
	Outlet,
} from 'react-router-dom'

import NotFound from '../layout/NotFound'

import Home from './Home'
import SideNav from '../layout/SideNav'

import CharacterRouter from './character/CharacterRouter'
import LanguageRouter from './language/LanguageRouter'

const OrganizationRouter = () => <Outlet />
const ReligionRouter = () => <Outlet />
const CultureRouter = () => <Outlet />
const ObjectRouter = () => <Outlet />

const MagicRouter = () => <Outlet />
const LocationRouter = () => <Outlet />
const MapRouter = () => <Outlet />
const TimelineRouter = () => <Outlet />

const CharacterArcRouter = () => <Outlet />
const RelationshipRouter = () => <Outlet />
const ThemeRouter = () => <Outlet />
const PlotRouter = () => <Outlet />
const ManuscriptRouter = () => <Outlet />

const Project = () => <>
	<main className="container-flex app">
		<SideNav />
		<div className="overflow-scroll w-100 d-flex flex-column p-2 mx-1">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route index element={<Home />} />
				
				<Route path='character/*' element={<CharacterRouter />} />
				<Route path='organization' element={<OrganizationRouter />} />
				<Route path='religion' element={<ReligionRouter />} />
				<Route path='culture' element={<CultureRouter />} />
				<Route path='object' element={<ObjectRouter />} />
				
				<Route path='language/*' element={<LanguageRouter />} />
				<Route path='magic' element={<MagicRouter />} />
				<Route path='locations' element={<LocationRouter />} />
				<Route path='map' element={<MapRouter />} />
				<Route path='timeline' element={<TimelineRouter />} />
				
				<Route path='arc' element={<CharacterArcRouter />} />
				<Route path='relationship' element={<RelationshipRouter />} />
				<Route path='theme' element={<ThemeRouter />} />
				<Route path='plot' element={<PlotRouter />} />
				<Route path='manuscript' element={<ManuscriptRouter />} />
				
				<Route element={<NotFound />} />
			</Routes>
			
			<Outlet />
		</div>
	</main>
</>

const ProjectRouter = () => <>
	<Routes>
		<Route
			path=":projectKey/*"
			element={<Project />}
		/>
		
		<Route element={<NotFound />} />
	</Routes>
	
	<Outlet />
</>

export default ProjectRouter;