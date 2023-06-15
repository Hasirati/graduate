import printers from '../db.json'
import Header from './Header/Header.js'
import Modal from './Modal/Modal'
import PrinterList from './PrinterList/PrinterList.js'
import Section from './Section/Section.js'

export default function App() {
	return (
		<>
			<Header />
			<Section title='Assortment'>
				<PrinterList items={printers} />
			</Section>
		</>
	)
}
