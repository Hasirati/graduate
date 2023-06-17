import Header from './Header/Header.js'
import Footer from './Footer/Footer'
import React, { useEffect, useState } from 'react'
import PrinterPaper from './PrinterPaper/PrinterPaper'
import PrinterList from './PrinterList/PrinterList.js'
import printers from '../db.json'

export default function App() {
	const [printerList, setPrinterList] = useState([])
	useEffect(() => {
		setPrinterList(printers.slice(0, 10))
	}, [])

	return (
		<>
			<Header />
			<PrinterPaper title='Assortment'>
				<PrinterList items={printers} />
			</PrinterPaper>

			<Footer />
		</>
	)
}
