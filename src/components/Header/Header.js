import css from './Header.module.css'
import React from 'react'
import Modal from '../Modal/Modal'

const Header = ({
	toggle,
	homePaper,
	catalogPaper,
	menuPaper,
	aboutPaper,
	visible,
}) => {
	return (
		<header className='container'>
			<div className={css.empty}></div>
			<section className={css.header}>
				<span className={css.title}>MY PRINTERS</span>
				<button type='button' className={css.butCreate} onClick={toggle}>
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
					<li onClick={homePaper}>
						<a href='#'>Home</a>
					</li>
					<li onMouseEnter={catalogPaper}>
						<a href='#'>Catalog</a>
					</li>
					<li onMouseEnter={menuPaper}>
						<a href='#'>Menu</a>
					</li>
					<li onClick={aboutPaper}>
						<a href='#'>About us</a>
					</li>
				</ul>
			</nav>
			{visible}
		</header>
	)
}

export default Header
