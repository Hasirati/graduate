const Modal = () => {
	return (
		<section>
			<div>
				<div>
					<span>Printer options</span>
					<button>X</button>
				</div>

				<div>
					<p>
						<label for='name'>
							Printer name
							<br />
							<input placeholder='Enter a name for the printer' />
						</label>
					</p>
					<p>
						<label for='size'>
							Maximum paper, size
							<br />
							<select id='size' class='modalEdit'>
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
						<label for='speed'>
							Print speed, ppm
							<br />
							<input placeholder='Enter the print speed, ppm' />
						</label>
					</p>
					<p>
						<label for='resource'>
							Cartridge resource, page
							<br />
							<input placeholder='Enter the cartridge resource, page' />
						</label>
					</p>
					<p>
						<label for='price'>
							Price, UAH
							<br />
							<input placeholder='Enter the price printer' />
						</label>
					</p>
					<p>
						<img alt='' src='' />
						<br />
						<label for='img'>
							Select image files
							<br />
							<input type='file' accept='.png, .jpg, .jpeg' />
						</label>
					</p>
				</div>

				<div class='modalBut'>
					<button
						class='butConfirmModal'
						id='butConfirmModal'
						onclick='addElementToLocalStorage()'
					>
						Confirm
					</button>
				</div>
			</div>
		</section>
	)
}

export default Modal
