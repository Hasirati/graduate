import React from 'react'
import css from './MenuDropMenu.module.css'
import Faza from './Faza'
import { Link } from 'react-router-dom'

export default function MenuDropMenu({ onClose }) {
	return (
		<div className={css.dropDownMenuDiv} onMouseLeave={onClose}>
			<Link to='/payment'>
				<Faza icon={'./assets/ikon/menuPayment.png'} name={'Payment'} />
			</Link>
			<Link to='/delivery'>
				<Faza icon={'./assets/ikon/menuDelivery.png'} name={'Delivery'} />
			</Link>
			<Link to='/return'>
				<Faza icon={'./assets/ikon/menuReturn.png'} name={'Return'} />
			</Link>
			<Link to='/advices'>
				<Faza icon={'./assets/ikon/menuAdvice.png'} name={'Advices'} />
			</Link>
			<Link to='/contacts'>
				<Faza icon={'./assets/ikon/menuContact.png'} name={'Contacts'} />
			</Link>
		</div>
	)
}
