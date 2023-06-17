import React, { useState } from 'react'
import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import css from './MenuDropMenu.module.css'
import MenuDrop from './MenuDrop'

export default function MenuDropMenu() {
	return (
		<section className={css.dropMenu}>
			{/* <div className='container'> */}
			<div className={css.dropDownMenuDiv}>
				<MenuDrop icon={'./assets/ikon/clock.jpg'} name={'Payment'} />
				<MenuDrop icon={'./assets/ikon/clock.jpg'} name={'Delivery'} />
				<MenuDrop icon={'./assets/ikon/clock.jpg'} name={'Return'} />
				<MenuDrop icon={'./assets/ikon/clock.jpg'} name={'Advices'} />
				<MenuDrop icon={'./assets/ikon/clock.jpg'} name={'Contacts'} />
			</div>
		</section>
	)
}
