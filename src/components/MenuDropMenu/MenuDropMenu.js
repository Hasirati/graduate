import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import iconSize from './iconSize'
import css from './MenuDropMenu.module.css'

const MenuDropMenu = () => {
	return (
		<section className={css.menuDrop}>
			<div className={css.dropDownMenu}>
				<div className={css.dropDownMenuDiv}>
					<div className={css.menuIkon}>
						<a href='#'>
							<GiReceiveMoney className={css.icon} size={iconSize.l} />
							<div>Payment</div>
						</a>
					</div>
					<div className={css.menuIkon}>
						<a href='#'>
							<TbTruckDelivery className={css.icon} size={iconSize.l} />
							<div>Delivery</div>
						</a>
					</div>
					<div className={css.menuIkon}>
						<a href='#'>
							<TbTruckReturn className={css.icon} size={iconSize.l} />
							<div>Return</div>
						</a>
					</div>
					<div className={css.menuIkon}>
						<a href='#'>
							<BiMessageSquare className={css.icon} size={iconSize.l} />
							<div>Advices</div>
						</a>
					</div>
					<div className={css.menuIkon}>
						<a href='#'>
							<BsFillTelephoneFill className={css.icon} size={iconSize.l} />
							<div>Contacts</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MenuDropMenu
