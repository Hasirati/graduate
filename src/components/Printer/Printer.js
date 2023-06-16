import PropTypes from 'prop-types'
import css from './Printer.module.css'
const Printer = ({ url, name, size, speed, resource, price }) => {
	return (
		<div className={css.compContent}>
			<img className={css.compImg} src={url} alt={name} />
			<h3 className={css.compLine}>{name}</h3>
			<p className={css.compLine}>Maximum paper size: {size}</p>
			<p className={css.compLine}>Color print speed, ppm: {speed}</p>
			<p className={css.compLine}>Cartridge resource, page: {resource}</p>
			<p className={css.compLine}>Price: {price} UAH</p>
		</div>
	)
}

Printer.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.string,
	speed: PropTypes.number,
	resource: PropTypes.number,
	price: PropTypes.number,
}

export default Printer
