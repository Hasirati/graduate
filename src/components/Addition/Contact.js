import css from './addition.module.css'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'
import React from 'react'

const Contact = () => (
	<section>
		<PrinterPaper title='Contact'>
			<div className={css.content}>
				<div className={css.map}>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5174.214133457117!2d25.63690189212646!3d49.57686930593651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303162a63761ab%3A0xe42c067aa6eb73cb!2z0KLQtdGF0L3RltGH0L3QuNC5INC60L7Qu9C10LTQtiDQotCd0KLQoyDRltC8LiDQhi4g0J_Rg9C70Y7Rjw!5e0!3m2!1suk!2sua!4v1653512380277!5m2!1suk!2sua'
						width='900'
						height='520'
					></iframe>
				</div>
				<div className={css.container}>
					<img src='./assets/ikon/location.jpg' className={css.ikon} />
					<span>
						<h3>Location:</h3>
						<p>
							46016, Ukraine
							<br />
							Ternopil
							<br />
							Lesya Kurbasa 13
						</p>
					</span>
				</div>
				<div className={css.container}>
					<img src='./assets/ikon/phone.jpg' className={css.ikon} />
					<span>
						<h3>Telephone:</h3>
						<p>
							+380 (12) 345-67-89 - Telegrem
							<br />
							+380 (98) 765-43-21 - Viber
						</p>
					</span>
				</div>
				<div className={css.container}>
					<img src='./assets/ikon/e-mail.jpg' className={css.ikon} />
					<span>
						<h3>E-MAIL:</h3>
						<p>
							MyPrinters@gmail.com
							<br />
							printerOnline@gmail.com
						</p>
					</span>
				</div>
				<div className={css.container}>
					<img src='./assets/ikon/clock.jpg' className={css.ikon} />
					<span>
						<h3>Working hours:</h3>
						<p>
							Mon - Fri: 09:00 to 18:00
							<br />
							Sat - Sun: Weekend
						</p>
					</span>
				</div>
				<div className={css.clear}></div>
			</div>
		</PrinterPaper>
	</section>
)

export default Contact
