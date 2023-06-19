import Printer from '../Printer/Printer.js'
import css from './PrinterList.module.css'
import React, { useState } from 'react'

function PrinterList({ items, style }) {
	const [selectedPrinter, setSelectedPrinter] = useState(null)

	const handlePrinterClick = printer => {
		setSelectedPrinter(printer)
	}

	const handleCloseModal = () => {
		setSelectedPrinter(null)
	}

	return (
		<ul className={css.visibleTable}>
			{items.map(printer => (
				<li
					key={printer.id}
					className={css.shadow}
					onClick={() => handlePrinterClick(printer)}
				>
					<img src={printer.url} className={css.conImg} />
				</li>
			))}
			{selectedPrinter && (
				<Printer
					url={selectedPrinter.url}
					name={selectedPrinter.name}
					size={selectedPrinter.size}
					speed={selectedPrinter.speed}
					resource={selectedPrinter.resource}
					price={selectedPrinter.price}
					onClose={handleCloseModal}
					style={style}
				/>
			)}
		</ul>
	)
}

export default PrinterList
