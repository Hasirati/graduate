import css from './addition.module.css'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'
import React from 'react'

const AboutUs = () => (
	<section>
		<PrinterPaper title='About us'>
			<div className={css.content}>
				<h3 className={css.h3}>MyPrinters: a trusted team of print experts</h3>
				<img
					src='./assets/addition/trustedTeam.jpg'
					width='400'
					className={css.imgRight}
				/>

				<p>
					We know what a good printer is. And we are ready to help you choose.
				</p>
				<p>
					My Printers provides a wide range of options when purchasing printing
					equipment and alternative printing media.
				</p>
				<p>
					At the same time, with us you can be sure that each of your orders
					will come to you at the strictly agreed time and you will receive
					economical printing as quickly as possible.
				</p>
				<p>We save not only your money, but also time.</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Only the most proven print products</h3>
				<img
					src='./assets/addition/qualityPrinting.jpg'
					width='400'
					className={css.imgLeft}
				/>

				<p>
					We have been cooperating with major manufacturers of printers and
					multifunctional devices for a long time. We have earned their trust by
					creating excellent conditions for our customers who want to receive
					high-quality printing.
				</p>
				<p>
					This is confirmed by the fact that for many years we have been
					successfully coping with the role of not only sellers of printing
					devices, but also offering high quality consumables for them.
				</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Everything you need for work and play</h3>
				<img
					src='./assets/addition/basePrinters.png'
					width='400'
					className={css.imgRight}
				/>

				<p>
					We have created a huge database of various inkjet printers that can
					meet any of your requirements.
				</p>
				<p>
					Here are collected both inexpensive offers for study, and professional
					photo printers and plotters.
				</p>
				<p>
					As printing professionals, we are trusted by major companies such as
					Epson, Canon and Brother.
				</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Get more out of your printer</h3>
				<img
					src='./assets/addition/moreForPrinter.jpg'
					width='400'
					className={css.imgLeft}
				/>

				<p>
					We combine the optimal balance of price and quality in our products.{' '}
				</p>
				<p>
					Thus, you will get a high level of creation of any images for a
					reasonable price.
				</p>
				<p>
					This opportunity for you appears due to the combination of: <br />- a
					wide variety of different means for saving - ink, PZK and CISS;
				</p>

				<h4>- providing you with a guarantee for each of our proposals.</h4>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Really high quality service</h3>
				<img
					src='./assets/addition/service.jpeg'
					width='400'
					className={css.imgRight}
				/>

				<p>
					The main rule of our company is the client above all else. That is why
					we have created all the conditions for you to find the printing device
					that you need with maximum comfort, order its delivery and get a
					ready-made solution for efficient work in any conditions.
				</p>
				<p>Our couriers will deliver your purchase in the city of Ternopil.</p>
				<p>
					At every stage, we offer the help of consultants whose main goal is to
					help you get a truly optimal solution for printing and saving on it.
				</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Service assistance</h3>
				<img
					src='./assets/addition/serviceAssistance.jpg'
					width='400'
					className={css.imgLeft}
				/>
				<p>
					We help solve problems! You can count on us if you need to install ink
					supply systems on site. We can also set up the outflow of waste ink
					from printers to your office or home. This opportunity is relevant for
					customers in Ternopil. We can also carry out these procedures in our
					service center for buyers from other cities of Ukraine.
				</p>
				<p>
					There is the possibility of a complete installation of the printing
					device, if you do not have time to carry it out on your own. You get
					an immediately ready-to-use solution that does not require any waste
					of time. The professional help of our masters will cost you mere
					pennies. You can order this service if your office or house is located
					within the city of Kyiv.
				</p>
				<p>
					Our experience and knowledge will make the purchase and maintenance of
					the printing device and the means to save money for it as comfortable
					as possible for you.
				</p>

				<div className={css.clear}></div>
			</div>
		</PrinterPaper>
	</section>
)

export default AboutUs
