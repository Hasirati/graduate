import css from './addition.module.css'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'

const Payment = () => (
	<section>
		<PrinterPaper title='Payment'>
			<div className={css.content}>
				<p>Online store MyPrinters accepts payment in several ways:</p>

				<h3 className={css.h3}>Payment to a MonoBank card</h3>
				<img
					src='./assets/addition/payOfCard.jpg'
					width='300'
					className={css.imgRight}
				/>
				<p>
					You can pay for the order on a MonoBank card. After placing an order,
					payment details will be indicated in aletter sent to your e-mail (or
					in the form of SMS to your phone). <br />
					IN THE PURPOSE OF PAYMENT, IT IS MANDATORY TO INDICATE THE ORDER
					NUMBER, SURNAME AND NAME OF THE BUYER.
				</p>
				<p>
					<i>
						Until the required amount is credited, the parcel is not collected.
					</i>
				</p>
				<p>
					Please note that the bank commission for all banking transactions is
					paid by the buyer.
				</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Online payment</h3>
				<img
					src='./assets/addition/onlinePay.jpg'
					width='300'
					className={css.imgRight}
				/>
				<p>
					Pay for the order directly at the time of its registration. The
					payment process takes place on a page protected by security
					certificates. Choose a payment method convenient for you:
				</p>
				<li className={css.list}>through MonoBank;</li>
				<li className={css.list}>from a Visa or MasterCard bank card;</li>
				<li className={css.list}>postpaid account.</li>
				<p>
					In the process of using the online payment service, you will be
					prompted to indicate your e-mail.
				</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Cash on delivery</h3>
				<img
					src='./assets/addition/cashOnDelivery.jpg'
					width='300'
					className={css.imgRight}
				/>
				<p>
					You can pay for the order upon receipt at Nova Poshta or Ukrposhta.
					The service is charged according to the current tariffs for money
					transfer (UAH 20 + 2% of the transfer amount). Cash on delivery
					through the dropshipping system is possible only on condition of an
					advance payment: 500 UAH.
				</p>
				<p>
					If you do not receive previous orders sent by cash on delivery, the
					following orders will not be sent by cash on delivery. In order to
					exercise the right to order goods in our online store in the future,
					incl. cash on delivery, you need to compensate for the costs of "idle"
					delivery of unreceived orders.
				</p>

				<div className={css.clear}></div>

				<h3 className={css.h3}>Postal transfer in Ukraine</h3>
				<img
					src='./assets/addition/postOfficePay.jpg'
					width='300'
					className={css.imgRight}
				/>
				<p>
					An available option is a postal order in Ukraine. We are glad to
					announce that the online store MyPrinters <b>accepts payments</b> in
					two varieties: to the address and on demand. As long as this
					<b>payment method</b> is convenient for customers, we are always ready
					to go to a meeting.
				</p>
				<p>
					The peculiarities of this variety are that it is produced from the
					branches of UkrPoshta. It is necessary to fill out the form that the
					employee will issue and inform the employees of the online store about
					the transfer. The commission is paid by the sender at the established
					rates of UkrPoshta. The term for receiving money in MyPrinters is up
					to 3 hours.​
				</p>

				<div className={css.clear}></div>

				<p>
					<i>
						It is important! All orders are collected only after the receipt of
						money (if payment is made by card or by transfer) within 24 hours.
						In the case of choosing cash on delivery as a
						<b>form of payment for the goods</b>, the collection and dispatch of
						the parcel is also carried out within a day after the receipt of the
						application from the client.
					</i>
				</p>
			</div>
		</PrinterPaper>
	</section>
)

export default Payment
