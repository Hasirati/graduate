import css from './Header.module.css'
import React, { Children, useState } from 'react'
import Modal from '../Modal/Modal'
import MenuDropCatalog from '../MenuDropCatalog/MenuDropCatalog'
import MenuDropMenu from '../MenuDropMenu/MenuDropMenu'
import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from '../Addition/AboutUs'

export default function Header({ children }) {
	const [showMenu, setShowMenu] = useState(false)
	const [showCatalog, setShowCatalog] = useState(false)

	const handlerShowMenu = () => {
		setShowMenu(!showMenu)
	}
	const handlerShowCatalog = () => {
		setShowCatalog(!showCatalog)
	}

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
					<Link to='/' className={css.navLi}>
						Home
					</Link>
					<li onMouseEnter={handlerShowCatalog} className={css.navLi}>
						Catalog
					</li>
					<li onMouseEnter={handlerShowMenu} className={css.navLi}>
						Menu
					</li>
					<Link to='/about' className={css.navLi}>
						About us
					</Link>
				</ul>
			</nav>
			{showCatalog && <MenuDropCatalog onClose={handlerShowCatalog} />}
			{showMenu && <MenuDropMenu onClose={handlerShowMenu} />}
			<Routes>
				<Route path='/about' element={<AboutUs />} />
			</Routes>
			{children}
		</header>
	)
}
