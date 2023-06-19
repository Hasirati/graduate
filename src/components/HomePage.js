import React from 'react'
import PrinterVisualRandom from './PrinterVisual/PrinterVisualRandom.js'
import MainPhoto from './MainPhoto/MainPhoto'

export default function HomePage() {
	return (
		<div>
			<MainPhoto />
			<PrinterVisualRandom style={'-35%'} />
		</div>
	)
}
