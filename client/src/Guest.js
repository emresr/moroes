import React from "react"
import "./App.css"

import Header from "./components/Header"
import List from "./components/List"

function Guest() {
	return (
		<div class="tm-container">
			<div class="tm-row">
				<Header />
				<List />
			</div>
		</div>
	)
}

export default Guest
