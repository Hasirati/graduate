import css from './MenuDropCatalog.module.css'
import React from 'react'

const MenuDropCatalog = () => {
	return (
		<section className={css.menuDrop}>
			<div className='container'>
				<div className={css.menuDropDownCatalog}>
					<div>
						<li>
							<a href='#'>Brother</a>
						</li>
						<li>
							<a href='#'>Canon</a>
						</li>
						<li>
							<a href='#'>Dell</a>
						</li>
						<li>
							<a href='#'>Epson</a>
						</li>
						<li>
							<a href='#'>HP</a>
						</li>
						<li>
							<a href='#'>Kodak</a>
						</li>
						<li>
							<a href='#'>Kyocera</a>
						</li>
						<li>
							<a href='#'>Jetix</a>
						</li>
						<li>
							<a href='#'>Polaroid</a>
						</li>
						<li>
							<a href='#'>Samsung</a>
						</li>
					</div>
					<div>
						<img src='./assets/images/homePrinter.png' />
						<img src='./assets/images/Brother/BROTHER-HL-1110R.jpg' />
						<img src='./assets/images/Canon/Canon-Laser-T140.jpg' />
						<img src='./assets/images/Dell/Dell-B2360Dn-Mono.jpg' />
						<img src='./assets/images/Epson/EPSON-SureColor-SC-F501.jpg' />
						<img src='./assets/images/HP/HP Ink-Tank-410-with-Wi-Fi.jpg' />
						<img src='./assets/images/Kodak/Kodak-Photo-Printer-Dock-PD450W.jpg' />
						<img src='./assets/images/Kyocera/Kyocera-M2040dn.jpg' />
						<img src='./assets/images/Jetix/JETIX-Mini-Printer-Student.jpg' />
						<img src='./assets/images/Polaroid/Polaroid-Lab.jpg' />
						<img src='./assets/images/Samsung/Samsung-Xpress-M2070W.jpg' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default MenuDropCatalog
