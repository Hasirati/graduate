import React, { useEffect, useState } from 'react'
import PrinterPaper from '../PrinterPaper/PrinterPaper'
import PrinterList from '../PrinterList/PrinterList.js'
import printers from '../../db.json'

export default function PrinterVisual({ folder }) {
	const [printerList, setPrinterList] = useState([])

	useEffect(() => {
		const filteredPrinters = printers.filter(printer =>
			printer.url.includes(`/${folder}/`)
		)
		setPrinterList(filteredPrinters)
	}, [folder])

	return (
		<>
			<PrinterPaper title={folder}>
				<PrinterList items={printerList} style={'-9%'} />
			</PrinterPaper>
		</>
	)
}
