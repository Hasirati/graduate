import css from './MenuDropMenu.module.css'
import iconSize from './iconSize'
import React from 'react'

export default function MenuDrop(props) {
	return (
		<div className={css.menuIkon}>
			<img src={props.icon} className={css.menuIkonImg} />
			<div>{props.name}</div>
		</div>
	)
}
