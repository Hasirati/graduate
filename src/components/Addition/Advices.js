import css from './addition.module.css'
import PrinterPaper from '../PrinterPaper/PrinterPaper.js'

const Advices = () => (
	<section>
		<PrinterPaper title='Advices'>
			<div className={css.content}>
				<p>
					Having a home printer is practical and convenient: it quickly prints
					the required amount from the Internet, school projects, reports,
					articles and more. To buy this technique was successful, it is
					necessary to approach it "wisely". How to choose from a wide range of
					products with the right characteristics? Which printer to buy at home
					to meet all questions? The rating of the 10 most popular printers of
					2017 will help to understand this difficult case.
				</p>

				<div className={css.center}>
					<img src='../img/homePrinter.png' width='70%' />
				</div>

				<h3 className={css.h3}>CANON I-SENSYS LBP6030B</h3>
				<p>
					The Japanese budget option will be an ideal solution for anyone who
					does not know which laser printer is best to buy for the home.
					Equipment that prints only in monochrome, produces 18 pages per minute
					and promises to significantly reduce the time for preparation of
					important documents.
				</p>
				<p>
					CANON I-SENSYS LBP6030B works with paper of A4, A5, B5, Letter,
					Executive, etc. There is only one way to connect to a computer - via a
					USB cord.
				</p>

				<div className={css.center}>
					<img
						src='./assets/images/Canon/CANON-i-Sensys-LBP6030B.jpg'
						width='40%'
					/>
				</div>

				<p>
					The duty cycle is 5,000 pages. This is an indicator of the maximum
					volume of monthly printing. This figure "speaks" of the possibility of
					using the printer more for personal needs than for office work.
				</p>
				<p>
					The equipment is equipped with the Automatic Image Refinement system,
					which allows you to get excellent clarity of printed text. "RAM" is
					provided in the amount of 32 MB.
				</p>

				<p>Advantages of the model:</p>
				<li>automatic print enhancement mode;</li>
				<li>ease of control of equipment;</li>
				<li>compact size and stylish black facade.</li>

				<p>
					Users of the equipment attributed the disadvantages of CANON I-SENSYS
					to the lack of wireless interfaces. Another point to keep in mind when
					buying this copy is that the USB cable is not included as standard.
					Such an accessory will have to be purchased separately.
				</p>

				<h3 className={css.h3}>SAMSUNG SL-M2020W</h3>
				<p>
					The fast SAMSUNG SL-M2020W Wi-Fi will be the best choice if the
					question of which printer to take home becomes global. As in previous
					copies, the paper tray closes with a convenient lid and can
					accommodate up to 150 sheets. Available paper sizes: A4, A5, Legan,
					Letter, etc.
				</p>

				<div className={css.center}>
					<img
						src='./assets/images/Samsung/Samsung-Xpress-M2070W.jpg'
						width='40%'
					/>
				</div>

				<p>
					If necessary, you can use not only standard sheets, but also
					cardboard, envelopes, labels, even cotton and archival paper.
				</p>

				<p>The classic equipment with the usual control has its advantages:</p>
				<li>built-in Wi-Fi to remotely print information;</li>
				<li>
					white body abrasions and fingerprints that would be visible on darker
					versions.
				</li>

				<p>
					All this is complemented by a powerful processor and a good "RAM" of 8
					MB, which provide technology with normal speed.
				</p>

				<h3 className={css.h3}>BROTHER HL-1112R</h3>
				<p>
					The Japanese company is famous for its reliability, and its products -
					long service life. These features are also characteristic of the
					BROTHER HL-1112R printer. The main feature of the model are separate
					cartridge and drum.
				</p>

				<div className={css.center}>
					<img src='./assets/images/Brother/BROTHER-HL-1110R.jpg' width='40%' />
				</div>

				<p>
					The speed of the equipment is 20 pages per minute, while the output
					time of the first sheet does not exceed 10 seconds. Productivity is
					unlikely to be suitable for office work: the equipment is more focused
					on home
				</p>

				<p>Advantages of the printer, according to consumers:</p>
				<li>
					100% full starter cartridge that allows you to print 1000 pages
					without refilling;
				</li>
				<li>
					reliable rollers in the feed tray, evenly and firmly gripping the
					paper.
				</li>

				<p>
					From the outside, the equipment looks fashionable. The combination of
					dark and light tones allows the printer to harmonize with any
					technique (for example, black and white monoblock APPLE).
				</p>

				<p>The printer also has disadvantages:</p>
				<li>only plain paper can be used for printing;</li>
				<li>a weak processor (200 MHz) is responsible for performance.</li>
				<p>
					The "disadvantages" include the lack of wireless connections. You can
					only print documents from the computer to which the printer is
					connected.
				</p>
			</div>
		</PrinterPaper>
	</section>
)
export default Advices
