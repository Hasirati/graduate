import css from './addition.module.css'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'

const Return = () => (
	<section>
		<PrinterPaper title='Payment'>
			<div className={css.content}>
				<h3 className={css.h3}>Terms of return of goods</h3>
				<p>
					According to the Law of Ukraine "On Protection of Consumer Rights",
					any product ordered by a consumer* in our online store can be returned
					or exchanged within 14 calendar days, starting from the day the order
					was placed, in the following cases:
					<li>
						if the product does not meet the quality declared by the
						manufacturer (exchange or return);
					</li>
					<li>
						if the product fully meets all requirements, but for some reason
						does not suit the consumer (exchange for a similar product or return
						if there is no similar product).
					</li>
				</p>
				<p>
					*consumer (clause 22, article 1 of the Law) - an individual who
					acquires, orders, uses or intends to purchase or order products for
					personal needs that are not directly related to entrepreneurial
					activity or the performance of the duties of an employee.
				</p>

				<h3 className={css.h3}>
					Mandatory conditions for a return or exchange
				</h3>
				<ol>
					<li>
						Notify us by email: printerOnline@gmail.com or viber: +380 (98)
						765-43-21 of your intention to send a return and be sure to attach:
					</li>

					<ul>
						<li className={css.list}>
							a copy of the mandatory completed and signed return application
							form (we send the form with each order);
						</li>
						<li className={css.list}>
							photo of a marriage, in case of a return due to the discovery of a
							marriage, which is very rare.
						</li>
					</ul>
					<br />

					<li>
						Get a response to your notification from our manager with
						confirmation of your compliance with the terms and conditions of the
						return.
					</li>
					<br />
					<li>
						Enclose <b>the completed return</b> form in the parcel with the
						goods * that you plan to return or exchange <b>is a prerequisite</b>
						.
					</li>
					<br />
					<li>
						Send the parcel (at your own expense) by New mail to the address
						indicated in the return application form. The cost of delivery is
						paid by you (the buyer) according to the tariffs of New Mail. Please
						note
						<b>
							that we do not accept parcels sent by cash on delivery or with
							forwarding at the expense of the recipient.
						</b>
						In this case, the parcels are returned to the sender.
					</li>
					<br />
					<li>
						Wait for a viber message or a phone call from the manager about the
						receipt of the return to the warehouse. Funds will be transferred
						within 3 working days from the date of receipt of the goods for
						return.
					</li>
					<br />
					<li>
						Reasons such as "I did not like the goods", "I did not have time to
						sell" - are not the reason for the return. Photos, sizes, fabric
						warehouse are on the website. Before you buy a product, read its
						description.
					</li>
					<br />
				</ol>

				<p>
					* ATTENTION!
					<b>
						Products are accepted for return only if the presentation is
						preserved:
					</b>
				</p>
				<li>in original packaging with article number;</li>
				<li>neatly folded goods in unwrinkled and undamaged our packaging.</li>

				<h3 className={css.h3}>Important!</h3>
				<p>
					Upon receipt of a return without complying with the return conditions
					or in improper condition (without respecting the presentation), we
					reserve the right to refuse such a return, limit discounts, promotions
					and cooperation, or not accept subsequent orders from such a buyer.
				</p>
				<p>
					In case of return of goods of inadequate quality, we assume the costs
					of sending the goods back to us. To do this, you must provide a
					receipt for the shipment, attached to the completed application for
					the return of goods. Please note: if the goods sent by you are not
					eligible for return (the deadlines were not met or the goods were
					intentionally damaged by you), we will be forced to send it back at
					your expense.
				</p>
				<p>
					This information is also distributed to our regular wholesale
					buyers-partners. A big request: please respect the work of your
					colleagues and remember that we set wholesale prices with a minimum
					trade margin, which may even be less than the cost of shipping 1 unit
					of such a product - do not abuse returns without significant reasons!
				</p>
			</div>
		</PrinterPaper>
	</section>
)

export default Return
