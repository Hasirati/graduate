import PropTypes from 'prop-types'
import css from './Printer.module.css'
import React from 'react'

const Printer = ({ url, name, size, speed, resource, price, onClose }) => {
	return (
		<div className={css.oneTable}>
			<div className={css.backDrop} onClick={onClose} />
			<div className={css.compContent}>
				<img className={css.compImg} src={url} alt={name} />
				<h3 className={css.compLine}>{name}</h3>
				<p className={css.compLine}>Maximum paper size: {size}</p>
				<p className={css.compLine}>Color print speed, ppm: {speed}</p>
				<p className={css.compLine}>Cartridge resource, page: {resource}</p>
				<p className={css.compLine}>Price: {price} UAH</p>
			</div>
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
