import Header from './Header/Header.js'
import Footer from './Footer/Footer'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './Addition/AboutUs'
import Payment from './Addition/Payment'
import Delivery from './Addition/Delivery'
import Return from './Addition/Return'
import Advices from './Addition/Advices'
import Contacts from './Addition/Contact'
import PrinterVisual from './PrinterVisual/PrinterVisual.js'
import HomePage from './HomePage.js'

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/payment' element={<Payment />} />
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/return' element={<Return />} />
					<Route path='/advices' element={<Advices />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route
						path='/Brother'
						element={<PrinterVisual folder={'Brother'} />}
					/>
					<Route path='/canon' element={<PrinterVisual folder={'Canon'} />} />
					<Route path='/dell' element={<PrinterVisual folder={'Dell'} />} />
					<Route path='/epson' element={<PrinterVisual folder={'Epson'} />} />
					<Route path='/hp' element={<PrinterVisual folder={'HP'} />} />
					<Route path='/kodak' element={<PrinterVisual folder={'Kodak'} />} />
					<Route
						path='/kyocera'
						element={<PrinterVisual folder={'Kyocera'} />}
					/>
					<Route path='/jetix' element={<PrinterVisual folder={'Jetix'} />} />
					<Route
						path='/polaroid'
						element={<PrinterVisual folder={'Polaroid'} />}
					/>
					<Route
						path='/samsung'
						element={<PrinterVisual folder={'Samsung'} />}
					/>
				</Routes>
			</main>
			<Footer />
		</>
	)
}
