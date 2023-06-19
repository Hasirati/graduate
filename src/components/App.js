import Header from './Header/Header.js'
import Footer from './Footer/Footer'
import React from 'react'
import RouteFun from './RouteFun.js'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './Addition/AboutUs'
import Payment from './Addition/Payment'
import Delivery from './Addition/Delivery'
import Return from './Addition/Return'
import Advices from './Addition/Advices'
import Contacts from './Addition/Contact'
import PrinterVisualRandom from './PrinterVisual/PrinterVisualRandom.js'
import PrinterVisual from './PrinterVisual/PrinterVisual.js'
import MainPhoto from './MainPhoto/MainPhoto'

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				{/* <Route path='/' element={<MainPhoto />} /> */}
				<Route path='/' element={<PrinterVisualRandom />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/delivery' element={<Delivery />} />
				<Route path='/return' element={<Return />} />
				<Route path='/advices' element={<Advices />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
			<Footer />
		</>
	)
}
