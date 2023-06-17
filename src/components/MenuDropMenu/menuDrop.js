import css from './MenuDropMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iconSize from './iconSize'

export default function menuDrop(props) {
	return (
		<div className={css.menuIkon}>
			<FontAwesomeIcon
				icon={props.icon}
				className={css.icon}
				size={iconSize.l}
			/>
			<div>{props.name}</div>
		</div>
	)
}
