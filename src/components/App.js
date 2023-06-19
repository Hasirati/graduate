import Header from './Header/Header.js'
import Footer from './Footer/Footer'
import React from 'react'
import PrinterVisualRandom from './PrinterVisual/PrinterVisualRandom.js'
import PrinterVisual from './PrinterVisual/PrinterVisual.js'
import MainPhoto from './MainPhoto/MainPhoto'
import { Routes, Route } from 'react-router-dom'

export default function App() {
	return (
		<>
			<Header>
				<Routes>
					<Route path='/' element={<MainPhoto />} />
					<Route path='/' element={<PrinterVisualRandom />} />
				</Routes>
			</Header>
			<Footer />
		</>
	)
}
