import React from 'react'
import css from './MenuDropCatalog.module.css'

export default function DropCatalog(props) {
	return (
		<div>
			<li className={css.catalogName}>{props.name}</li>
		</div>
	)
}
