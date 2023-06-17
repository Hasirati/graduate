import React from 'react'
import css from './MenuDropCatalog.module.css'

export default function DropCatalog({ url }) {
	return <img src={url} className={css.catalogImg} />
}
