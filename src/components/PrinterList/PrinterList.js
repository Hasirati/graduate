import Printer from '../Printer/Printer.js'
import css from './PrinterList.module.css'
function PrinterList({ items }) {
	return (
		<ul className={css.compTable}>
			{items.map(printer => (
				<li key={printer.id}>
					<Printer
						url={printer.url}
						name={printer.name}
						size={printer.size}
						speed={printer.speed}
						resource={printer.resource}
						price={printer.price}
					/>
				</li>
			))}
		</ul>
	)
}

export default PrinterList
