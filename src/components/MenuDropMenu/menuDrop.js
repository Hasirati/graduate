import css from './MenuDropMenu.module.css'
import iconSize from './iconSize'
import React from 'react'

export default function MenuDrop(props) {
	return (
		<div className={css.menuIkon}>
			{/* <FontAwesomeIcon */}
			icon={props.icon}
			{/* // 	className={css.icon}
			// 	size={iconSize.l}
			// /> */}
			<div>{props.name}</div>
		</div>
	)
}
