import css from './MainPhoto.module.css'

const MainPhoto = () => {
	return (
		<div className='container'>
			<img src='../assets/images/mainPhoto.jpg' className={css.mainPhoto} />
		</div>
	)
}

export default MainPhoto
