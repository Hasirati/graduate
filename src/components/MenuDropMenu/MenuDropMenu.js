import React from 'react'
import css from './MenuDropMenu.module.css'
import MenuDrop from './MenuDrop'

export default function MenuDropMenu({ onClose }) {
	return (
		<div className={css.dropDownMenuDiv} onMouseLeave={onClose}>
			<MenuDrop icon={'./assets/ikon/menuPayment.png'} name={'Payment'} />
			<MenuDrop icon={'./assets/ikon/menuDelivery.png'} name={'Delivery'} />
			<MenuDrop icon={'./assets/ikon/menuReturn.png'} name={'Return'} />
			<MenuDrop icon={'./assets/ikon/menuAdvice.png'} name={'Advices'} />
			<MenuDrop icon={'./assets/ikon/menuContact.png'} name={'Contacts'} />
		</div>
	)
}
