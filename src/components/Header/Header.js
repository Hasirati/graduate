import css from './Header.module.css'

const Header = () => {
	return (
		<header className='container'>
			<div className={css.empty}></div>
			<section className={css.header}>
				<span>MY PRINTERS</span>
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
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Catalog</a>
					</li>
					<li>
						<a href='#'>Menu</a>
					</li>
					<li>
						<a href='#'>About us</a>
					</li>
				</ul>
			</nav>

			<div>
				<img src='../assets/images/mainPhoto.jpg' className={css.mainPhoto} />
			</div>
		</header>
	)
}

export default Header
