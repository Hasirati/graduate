import React, { useState } from 'react'
import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import css from './MenuDropMenu.module.css'
import MenuDrop from './MenuDrop'

export default function MenuDropMenu() {
	return (
		<div className={css.dropDownMenuDiv}>
			<MenuDrop icon={'./assets/ikon/menuPayment.png'} name={'Payment'} />
			<MenuDrop icon={'./assets/ikon/menuDelivery.png'} name={'Delivery'} />
			<MenuDrop icon={'./assets/ikon/menuReturn.png'} name={'Return'} />
			<MenuDrop icon={'./assets/ikon/menuAdvice.png'} name={'Advices'} />
			<MenuDrop icon={'./assets/ikon/menuContact.png'} name={'Contacts'} />
		</div>
	)
}
