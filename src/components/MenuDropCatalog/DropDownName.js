import React from 'react'
import css from './MenuDropCatalog.module.css'

export default function DropDownName(props) {
	return (
		<li
			className={css.catalogName}
			onMouseEnter={props.showing}
			onMouseLeave={props.showing}
		>
			{props.name}
		</li>
	)
}
