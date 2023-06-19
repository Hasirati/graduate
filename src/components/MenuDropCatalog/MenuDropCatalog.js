import css from './MenuDropCatalog.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownImg from './DropDownImg'
import DropDownName from './DropDownName'

export default function MenuDropCatalog({ onClose }) {
	const [currentUrl, setCurrentUrl] = useState(
		'./assets/images/homePrinter.png'
	)

	return (
		<div className={css.menuDropDownCatalog} onMouseLeave={onClose}>
			<div>
				<Link to='/brother'>
					<DropDownName
						name={'Brother'}
						url={'./assets/images/Brother/Brother-DCP-1510E.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/canon'>
					<DropDownName
						name={'Canon'}
						url={'./assets/images/Canon/Canon-Laser-T140.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/dell'>
					<DropDownName
						name={'Dell'}
						url={'./assets/images/Dell/Dell-B2360Dn-Mono.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/epson'>
					<DropDownName
						name={'Epson'}
						url={'./assets/images/Epson/EPSON-SureColor-SC-F501.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/hp'>
					<DropDownName
						name={'HP'}
						url={'./assets/images/HP/HP-Ink-Tank-410-with-Wi-Fi.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/kodak'>
					<DropDownName
						name={'Kodak'}
						url={'./assets/images/Kodak/Kodak-Photo-Printer-Dock-PD450W.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/kyocera'>
					<DropDownName
						name={'Kyocera'}
						url={'./assets/images/Kyocera/Kyocera-M2040dn.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/jetix'>
					<DropDownName
						name={'Jetix'}
						url={'./assets/images/Jetix/JETIX-Mini-Printer-Student.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/polaroid'>
					<DropDownName
						name={'Polaroid'}
						url={'./assets/images/Polaroid/Polaroid-Lab.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
				<Link to='/samsung'>
					<DropDownName
						name={'Samsung'}
						url={'./assets/images/Samsung/Samsung-Xpress-M2070W.jpg'}
						onMouseEnter={setCurrentUrl}
					/>
				</Link>
			</div>
			<div>
				<DropDownImg url={currentUrl} />
			</div>
		</div>
	)
}
