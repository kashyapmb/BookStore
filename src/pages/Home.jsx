import React from "react"
import Navbar from "../components/Navbar"

function Home(props) {
	return (
		<>
			<Navbar />
			<div>Home</div>
			<h1>My name is {props.name}</h1>
		</>
	)
}

export default Home
