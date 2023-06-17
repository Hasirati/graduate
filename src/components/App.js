import Header from './Header/Header.js'
import Footer from './Footer/Footer'
import React from 'react'
import PrinterPaper from './PrinterPaper/PrinterPaper'
import PrinterList from './PrinterList/PrinterList.js'
import printers from '../db.json'
import MenuDropMenu from './MenuDropMenu/MenuDropMenu.js'

export default function App() {
	return (
		<>
			<Header />
			{/* <PrinterPaper title='Assortment'>
				<PrinterList items={printers} />
			</PrinterPaper> */}
			{/* <MenuDropMenu /> */}
			<Footer />
		</>
	)
}
