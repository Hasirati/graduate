import React, { useEffect, useState } from 'react'
import PrinterPaper from '../PrinterPaper/PrinterPaper'
import PrinterList from '../PrinterList/PrinterList.js'
import printers from '../../db.json'

export default function PrinterVisual() {
	const [printerList, setPrinterList] = useState([])

	useEffect(() => {
		const filteredPrinters = printers.filter(printer =>
			printer.url.includes('/Brother/')
		)
		setPrinterList(filteredPrinters.slice(0, 10))
	}, [])

	return (
		<>
			<PrinterPaper title='Assortment'>
				<PrinterList items={printerList} />
			</PrinterPaper>
		</>
	)
}
