import React from 'react'
import css from './MenuDropCatalog.module.css'

export default function DropCatalog(props) {
	return (
		<img
			src={props.url}
			className={css.catalogImg}
			onMouseLeave={props.onClose}
		/>
	)
}
