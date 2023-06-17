import React from 'react'
import css from './MenuDropCatalog.module.css'

export default function DropDownName(props) {
	return (
		<li
			className={css.catalogName}
			onMouseEnter={() => props.onMouseEnter(props.url)}
		>
			{props.name}
		</li>
	)
}
