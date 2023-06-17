import { useState } from 'react'
import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import css from './MenuDropMenu.module.css'
import React from 'react'
import menuDrop from './menuDrop'

export default function MenuDropMenu(props) {
	return (
		<section className={`menuDrop $ {open ? 'active' : 'inactive'}`}>
			{/* <div className='container'> */}
			<div className={css.dropDownMenuDiv}>
				<menuDrop icon={GiReceiveMoney} name={'Payment'} />
				<menuDrop icon={TbTruckDelivery} name={'Delivery'} />
				<menuDrop icon={TbTruckReturn} name={'Return'} />
				<menuDrop icon={BiMessageSquare} name={'Advices'} />
				<menuDrop icon={BsFillTelephoneFill} name={'Contacts'} />
			</div>
		</section>
	)
}
