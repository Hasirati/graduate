import css from './MenuDropCatalog.module.css'
import React, { useState } from 'react'
import DropDownImg from './DropDownImg'
import DropDownName from './DropDownName'

export default function MenuDropCatalog() {
	const [currentUrl, setCurrentUrl] = useState(
		'./assets/images/homePrinter.png'
	)

	return (
		<div className={css.menuDropDownCatalog}>
			<div>
				<DropDownName
					name={'Brother'}
					url={'./assets/images/Brother/Brother-DCP-1510E.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Canon'}
					url={'./assets/images/Canon/Canon-Laser-T140.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Dell'}
					url={'./assets/images/Dell/Dell-B2360Dn-Mono.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Epson'}
					url={'./assets/images/Epson/EPSON-SureColor-SC-F501.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'HP'}
					url={'./assets/images/HP/HP Ink-Tank-410-with-Wi-Fi.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Kodak'}
					url={'./assets/images/Kodak/Kodak-Photo-Printer-Dock-PD450W.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Kyocera'}
					url={'./assets/images/Kyocera/Kyocera-M2040dn.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Jetix'}
					url={'./assets/images/Jetix/JETIX-Mini-Printer-Student.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Polaroid'}
					url={'./assets/images/Polaroid/Polaroid-Lab.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
				<DropDownName
					name={'Samsung'}
					url={'./assets/images/Samsung/Samsung-Xpress-M2070W.jpg'}
					onMouseEnter={setCurrentUrl}
				/>
			</div>
			<div>
				<DropDownImg url={currentUrl} />
			</div>
		</div>
	)
}
