import css from './Header.module.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import MenuDropCatalog from '../MenuDropCatalog/MenuDropCatalog'
import MenuDropMenu from '../MenuDropMenu/MenuDropMenu'

export default function Header() {
	const [showMenu, setShowMenu] = useState(false)
	const [showCatalog, setShowCatalog] = useState(false)

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
					<li onMouseEnter={() => setShowCatalog(!showCatalog)}>Catalog</li>
					<li onMouseEnter={() => setShowMenu(!showMenu)}>Menu</li>
					<li>About us</li>
				</ul>
			</nav>
			{showCatalog && (
				<MenuDropCatalog onClose={() => setShowCatalog(!showCatalog)} />
			)}
			{showMenu && <MenuDropMenu onClose={() => setShowMenu(!showMenu)} />}
		</header>
	)
}
