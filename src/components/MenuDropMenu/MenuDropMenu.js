import React, { useState } from 'react'
import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import css from './MenuDropMenu.module.css'
import MenuDrop from './MenuDrop'

export default function MenuDropMenu({ items }) {
	return (
		<section className={`menuDrop $ {{items} ? 'active' : 'inactive'}`}>
			{/* <div className='container'> */}
			<div className={css.dropDownMenuDiv}>
				<MenuDrop icon={<GiReceiveMoney />} name={'Payment'} />
				<MenuDrop icon={TbTruckDelivery} name={'Delivery'} />
				<MenuDrop icon={TbTruckReturn} name={'Return'} />
				<MenuDrop icon={BiMessageSquare} name={'Advices'} />
				<MenuDrop icon={BsFillTelephoneFill} name={'Contacts'} />
			</div>
		</section>
	)
}
