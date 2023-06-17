import css from './Header.module.css'
import React from 'react'
import { useState } from 'react'
import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import MenuDrop from '../MenuDropMenu/MenuDrop'
import css1 from '../MenuDropMenu/MenuDropMenu.module.css'
import Modal from '../Modal/Modal'
import MainPhoto from '../MainPhoto/MainPhoto'
import printers from '../../db.json'
import PrinterList from '../PrinterList/PrinterList.js'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'
import AboutUs from '../Addition/AboutUs'
import MenuDropCatalog from '../MenuDropCatalog/MenuDropCatalog'
import MenuDropMenu from '../MenuDropMenu/MenuDropMenu'

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className='container'>
			<div className={css.empty}></div>
			<section className={css.header}>
				<span className={css.title}>MY PRINTERS</span>
				<button type='button' className={css.butCreate}>
					Create printer
				</button>

				<label>
					<input
						type='search'
						placeholder='Search your printer'
						className={css.edit}
					/>
				</label>
				<button className={css.butSearch}>Search</button>
				<button className={css.butCancel}>Cancel</button>
			</section>

			<nav>
				<ul>
					<li>Home</li>
					<li>Catalog</li>
					<li
						onClick={() => {
							setOpen(!open)
						}}
					>
						Menu
					</li>
					<li>About us</li>
				</ul>
			</nav>
			<ul>
				<section className={`menuDrop $ {open ? 'active' : 'inactive'}`}>
					{/* <div className='container'> */}
					<div className={css1.dropDownMenuDiv}>
						<MenuDrop icon={<GiReceiveMoney />} name={'Payment'} />
						<MenuDrop icon={TbTruckDelivery} name={'Delivery'} />
						<MenuDrop icon={TbTruckReturn} name={'Return'} />
						<MenuDrop icon={BiMessageSquare} name={'Advices'} />
						<MenuDrop icon={BsFillTelephoneFill} name={'Contacts'} />
					</div>
				</section>
			</ul>
		</header>
	)
}
