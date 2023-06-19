import css from './Modal.module.css'
import React from 'react'

export default function Modal({ onClose }) {
	return (
		<section className={css.modal} onClick={onClose}>
			<div className={css.overlay}></div>
			<div className={css.modalWindow}>
				<div className={css.modalHead}>
					<span className={css.modalTitle}>Printer options</span>
					<button className={css.butCloseModal}>X</button>
				</div>

				<div className={css.modalBody}>
					<p>
						<label>
							Printer name
							<br />
							<input
								className={css.modalEdit}
								placeholder='Enter a name for the printer'
							/>
						</label>
					</p>
					<p>
						<label>
							Maximum paper, size
							<br />
							<select className={css.modalEdit}>
								<option value='A3'>A3</option>
								<option value='A4'>A4</option>
								<option value='A5'>A5</option>
								<option value='A6'>A6</option>
								<option value='A7'>A7</option>
								<option value='A8'>A8</option>
							</select>
						</label>
					</p>
					<p>
						<label>
							Print speed, ppm
							<br />
							<input
								className={css.modalEdit}
								placeholder='Enter the print speed, ppm'
							/>
						</label>
					</p>
					<p>
						<label>
							Cartridge resource, page
							<br />
							<input
								className={css.modalEdit}
								placeholder='Enter the cartridge resource, page'
							/>
						</label>
					</p>
					<p>
						<label>
							Price, UAH
							<br />
							<input
								className={css.modalEdit}
								placeholder='Enter the price printer'
							/>
						</label>
					</p>
					<p>
						<img id={css.modalFile} alt='' src='' />
						<br />
						<label>
							Select image files
							<br />
							<input
								type='file'
								className={css.modalEdit}
								accept='.png, .jpg, .jpeg'
							/>
						</label>
					</p>
				</div>

				<div>
					<button className={css.butConfirmModal}>Confirm</button>
				</div>
			</div>
		</section>
	)
}
