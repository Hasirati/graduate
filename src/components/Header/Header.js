import css from './Header.module.css'
import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import MainPhoto from '../MainPhoto/MainPhoto'
import printers from '../../db.json'
import PrinterList from '../PrinterList/PrinterList.js'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'
import AboutUs from '../Addition/AboutUs'
import MenuDropCatalog from '../MenuDropCatalog/MenuDropCatalog'
import MenuDropMenu from '../MenuDropMenu/MenuDropMenu'

class Header extends Component {
	state = {
		visible1: false,
		visible2: false,
		visible3: false,
		visible4: false,
		visible5: false,
		photo: true,
	}

	toggle = () => {
		this.setState(prevState => ({
			visible1: !prevState.visible,
		}))
	}
	homePaper = () => {
		this.setState(prevState => ({
			visible2: !prevState.visible,
			visible4: false,
			visible3: false,
		}))
	}
	catalogPaper = () => {
		this.setState(prevState => ({
			visible3: !prevState.visible,
			visible4: false,
		}))
	}
	menuPaper = () => {
		this.setState(prevState => ({
			visible4: !prevState.visible,
			visible3: false,
		}))
	}
	aboutPaper = () => {
		this.setState(prevState => ({
			visible5: !prevState.visible,
			photo: !prevState.photo,
		}))
	}

	render() {
		return (
			<header className='container'>
				<div className={css.empty}></div>
				<section className={css.header}>
					<span className={css.title}>MY PRINTERS</span>
					<button type='button' className={css.butCreate} onClick={this.toggle}>
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
						<li onClick={this.homePaper}>Home</li>
						<li onMouseEnter={this.catalogPaper}>Catalog</li>
						<li onMouseEnter={this.menuPaper}>Menu</li>
						<li onClick={this.aboutPaper}>About us</li>
					</ul>
				</nav>

				{this.state.visible1 && <Modal />}
				{this.state.photo && <MainPhoto />}
				{this.state.visible2 && (
					<PrinterPaper title='Assortment'>
						<PrinterList items={printers} />
					</PrinterPaper>
				)}
				{this.state.visible3 && <MenuDropCatalog />}
				{this.state.visible4 && <MenuDropMenu />}
				{this.state.visible5 && <AboutUs />}
			</header>
		)
	}
}

export default Header
