import css from './addition.module.css'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'
import React from 'react'

const Delivery = () => (
	<section>
		<PrinterPaper title='Delivery'>
			<div className={css.content}>
				<p>The goods can be delivered in several ways​:</p>
				<h3 className={css.h3}>
					Delivery across Ukraine by new mail (at the expense of the buyer)
				</h3>
				<p>
					Delivery time - 1-2 days from the date of order payment. We will
					inform you about the receipt of the order by SMS / viber message and
					send the TTN number.
					<br />
					At the Nova Poshta branch, you will need to provide the Express
					Invoice (EN) number and present your passport. If the order is issued
					for a legal entity - a power of attorney from the customer company in
					any form with a wet seal.
					<br />
					The parcel is stored for 5 days at the office specified when placing
					the order. At the end of the term - returned to our warehouse. You can
					use the address delivery service and your order will be delivered to
					the address specified in the order.
					<br />
					Estimated cost of delivery of a wholesale order - 65 UAH.
				</p>
				<h3 className={css.h3}>
					Delivery across Ukraine by Ukrposhta (at the expense of the buyer)
				</h3>
				<p>
					The maximum delivery time is 5 days from the date of order payment.
					The parcel arrives at your post office, about which you are informed
					by an SMS notification from the UkrPoshta company. You need to come to
					the office with a notification, with a passport and receive your
					order. Delivery price 18 UAH / 0.2 kg.
					<br />
					UkrPoshta Express - within one day in the region, up to 4 days in the
					country.
					<br />
					Cost*: 1 kg - 21 UAH, 2 kg - 24 UAH, 5 kg - 27 UAH.
					<br />
					UkrPoshta Standard - within two days in the region, up to 5-6 days in
					the country.
					<br />
					Cost*: 1 kg - 18 UAH, 2 kg - 22 UAH, 5 kg - 24 UAH.
					<br />
					Estimated cost of targeted delivery of a wholesale order - 65 UAH.
					<br />
					*according to the tariffs of the SE "UkrPoshta".
					<br />
					After 5 days, the package will be returned to us. Make sure you get
					your order!
					<br />
					When placing an order, you can also choose targeted delivery and the
					Ukrposhta courier will deliver the order to the address you specified.
				</p>
			</div>
		</PrinterPaper>
	</section>
)

export default Delivery
