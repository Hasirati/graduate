import css from './PrinterPaper.module.css'
import PropTypes from 'prop-types'
import React from 'react'

function PrinterPaper({ title, children }) {
	return (
		<div className='container'>
			{title && <h1 className={css.h1}>{title}</h1>}
			{children}
		</div>
	)
}

PrinterPaper.prototype = {
	title: PropTypes.string,
}

export default PrinterPaper
