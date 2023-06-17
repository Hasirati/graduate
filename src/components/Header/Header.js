import css from './Header.module.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import MainPhoto from '../MainPhoto/MainPhoto'
import printers from '../../db.json'
import PrinterList from '../PrinterList/PrinterList.js'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'
import AboutUs from '../Addition/AboutUs'
import MenuDropCatalog from '../MenuDropCatalog/MenuDropCatalog'
import MenuDropMenu from '../MenuDropMenu/MenuDropMenu'

export default function Header() {
	const [showModal, setShowModal] = useState(false)

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
					<li onMouseEnter={() => setShowModal(!showModal)}>Menu</li>
					<li>About us</li>
				</ul>
			</nav>
			{showModal && <MenuDropMenu />}
		</header>
	)
}
