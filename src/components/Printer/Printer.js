import PropTypes from 'prop-types'

const Printer = ({ url, name, size, speed, resource, price }) => {
	return (
		<div>
			<div>
				<img src={url} alt={name} width='200' />
				<h3>{name}</h3>
				<p>Maximum paper size: {size}</p>
				<p>Color print speed, ppm: {speed}</p>
				<p>Cartridge resource, page: {resource}</p>
				<p>Price: {price} UAH</p>
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
