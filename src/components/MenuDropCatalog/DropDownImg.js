import React from 'react'
import css from './MenuDropCatalog.module.css'

export default function DropCatalog(props) {
	return (
		<div>
			<img src={props.url} className={css.catalogImg} />
		</div>
	)
}
