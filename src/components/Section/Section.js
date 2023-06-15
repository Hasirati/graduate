import PropTypes from 'prop-types'
import React from 'react'
import css from './Section.module.css'

function Section({ title, children }) {
	return (
		<div className='container'>
			{title && <h2 className={css.h2}>{title}</h2>}
			{children}
		</div>
	)
}

Section.prototype = {
	title: PropTypes.string,
}

export default Section

{
	/* <Section title="Assortment">
	<PrinterList items={printers} />
</Section> */
}
