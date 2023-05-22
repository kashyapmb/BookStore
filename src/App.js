import * as React from "react"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Product from "./pages/Product"
import Books from "./pages/Books"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/">
					<Route exact path="/" element={<Home name="Kashyap" />} />
					<Route exact path="/product" element={<Product />} />
					<Route exact path="/books" element={<Books />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
