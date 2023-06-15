import printers from '../db.json'
import Header from './Header/Header.js'
import Modal from './Modal/Modal'
import PrinterList from './PrinterList/PrinterList.js'
import Section from './Section/Section.js'
import PrinterPaper from './PrinterPaper/PrinterPaper.js'
import MainPhoto from './MainPhoto/MainPhoto'
import Footer from './Footer/Footer'

export default function App() {
	return (
		<>
			<Header />
			<MainPhoto />
			<PrinterPaper title='Assortment'>
				<PrinterList items={printers} />
			</PrinterPaper>
			<Footer />
		</>
	)
}
