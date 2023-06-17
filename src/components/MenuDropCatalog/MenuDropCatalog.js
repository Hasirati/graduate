import css from './MenuDropCatalog.module.css'
import React, { useState } from 'react'
import DropDownImg from './DropDownImg'
import DropDownName from './DropDownName'

export default function MenuDropCatalog({ onClose }) {
	const [showIMG, setShowIMG] = useState(false)

	return (
		<div className={css.menuDropDownCatalog} onMouseLeave={onClose}>
			<div>
				<DropDownName name={'Brother'} showing={() => setShowIMG(!showIMG)} />
				<DropDownName name={'Canon'} />
				<DropDownName name={'Dell'} />
				<DropDownName name={'Epson'} />
				<DropDownName name={'HP'} />
				<DropDownName name={'Kodak'} />
				<DropDownName name={'Kyocera'} />
				<DropDownName name={'Jetix'} />
				<DropDownName name={'Polaroid'} />
				<DropDownName name={'Samsung'} />
			</div>
			<div>
				{!showIMG && (
					<DropDownImg
						url={'./assets/images/homePrinter.png'}
						onClose={() => setShowIMG(!showIMG)}
					/>
				)}
				{showIMG && (
					<DropDownImg url={'./assets/images/Brother/BROTHER-HL-1110R.jpg'} />
				)}
				{/* {showIMG && (
					<DropDownImg url={'./assets/images/Canon/Canon-Laser-T140.jpg'} />
				)} */}
				{/*<DropDownImg url={'./assets/images/Dell/Dell-B2360Dn-Mono.jpg'} />
				<DropDownImg
					url={'./assets/images/Epson/EPSON-SureColor-SC-F501.jpg'}
				/>
				<DropDownImg
					url={'./assets/images/HP/HP Ink-Tank-410-with-Wi-Fi.jpg'}
				/>
				<DropDownImg
					url={'./assets/images/Kodak/Kodak-Photo-Printer-Dock-PD450W.jpg'}
				/>
				<DropDownImg url={'./assets/images/Kyocera/Kyocera-M2040dn.jpg'} />
				<DropDownImg
					url={'./assets/images/Jetix/JETIX-Mini-Printer-Student.jpg'}
				/>
				<DropDownImg url={'./assets/images/Polaroid/Polaroid-Lab.jpg'} />
				<DropDownImg
					url={'./assets/images/Samsung/Samsung-Xpress-M2070W.jpg'}
				/> */}
			</div>
		</div>
	)
}
