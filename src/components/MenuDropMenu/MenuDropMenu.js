import React from 'react'
import css from './MenuDropMenu.module.css'
import MenuDrop from './MenuDrop'
import { Link, Route, Routes } from 'react-router-dom'
import Payment from '../Addition/Payment'
import Delivery from '../Addition/Delivery'
import Return from '../Addition/Return'
import Advices from '../Addition/Advices'
import Contacts from '../Addition/Contact'

export default function MenuDropMenu({ onClose }) {
	return (
		<div className={css.dropDownMenuDiv} onMouseLeave={onClose}>
			<Link to='/payment'>
				<MenuDrop icon={'./assets/ikon/menuPayment.png'} name={'Payment'} />
			</Link>
			<Link to='/delivery'>
				<MenuDrop icon={'./assets/ikon/menuDelivery.png'} name={'Delivery'} />
			</Link>
			<Link to='/return'>
				<MenuDrop icon={'./assets/ikon/menuReturn.png'} name={'Return'} />
			</Link>
			<Link to='/advices'>
				<MenuDrop icon={'./assets/ikon/menuAdvice.png'} name={'Advices'} />
			</Link>
			<Link to='/contacts'>
				<MenuDrop icon={'./assets/ikon/menuContact.png'} name={'Contacts'} />
			</Link>

			<Routes>
				<Route path='/payment' element={<Payment />} />
				<Route path='/delivery' element={<Delivery />} />
				<Route path='/return' element={<Return />} />
				<Route path='/advices' element={<Advices />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</div>
	)
}
