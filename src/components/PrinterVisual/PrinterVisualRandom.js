import React, { useEffect, useState } from 'react'
import PrinterPaper from '../PrinterPaper/PrinterPaper'
import PrinterList from '../PrinterList/PrinterList.js'
import printers from '../../db.json'

export default function PrinterVisualRandom() {
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
			<PrinterPaper title='Assortment'>
				<PrinterList items={printerList} />
			</PrinterPaper>
		</>
	)
}
