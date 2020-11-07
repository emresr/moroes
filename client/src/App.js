import React from "react"
import "./App.css"
import { render } from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Guest from "./Guest"
import Dashboard from "./Dashboard"

const App = () => (
	<Router>
		<div>
			<Route path="/" render={Guest} />
		</div>
	</Router>
)

export default App
