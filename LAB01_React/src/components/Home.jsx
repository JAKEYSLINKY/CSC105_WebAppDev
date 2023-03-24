import React from 'react'
import Profile from "./Profile";
import Navbar from "./Navbar"
import "./Home.css"

const Home = () => {
	return (
		<div className="layout">
			<Profile />
			<Navbar />
		</div>
	)
}

export default Home
