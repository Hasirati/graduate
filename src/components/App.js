import Header from './Header/Header.js'
import Footer from './Footer/Footer'
import React, { useEffect, useState } from 'react'
import PrinterPaper from './PrinterPaper/PrinterPaper'
import PrinterListRandom from './PrinterList/PrinterListRandom.js'
import printers from '../db.json'

export default function App() {
	const [printerList, setPrinterList] = useState([])
	useEffect(() => {
		const getRandomPrinters = () => {
			const randomPrinters = []

			while (randomPrinters.length < 10) {
				const randomIndex = Math.floor(Math.random() * printers.length)
				const randomPrinter = printers[randomIndex]

				if (!randomPrinters.includes(randomPrinter)) {
					randomPrinters.push(randomPrinter)
				}
			}

			return randomPrinters
		}

		setPrinterList(getRandomPrinters())
	}, [])

	return (
		<>
			<Header />
			<PrinterPaper title='Assortment'>
				<PrinterListRandom items={printerList} />
			</PrinterPaper>

			<Footer />
		</>
	)
}
