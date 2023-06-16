import { BiMessageSquare } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb'
import iconSize from './iconSize'
import css from './MenuDropMenu.module.css'
import React, { Component } from 'react'
import Payment from '../Addition/Payment'
import Delivery from '../Addition/Delivery'
import Return from '../Addition/Return'
import Advices from '../Addition/Advices'
import Contacts from '../Addition/Contact'

class MenuDropMenu extends Component {
	state = {
		visible1: false,
		visible2: false,
		visible3: false,
		visible4: false,
		visible5: false,
	}

	Payment = () => {
		this.setState(prevState => ({
			visible1: !prevState.visible1,
		}))
	}
	Delivery = () => {
		this.setState(prevState => ({
			visible2: !prevState.visible2,
		}))
	}
	Return = () => {
		this.setState(prevState => ({
			visible3: !prevState.visible3,
		}))
	}
	Advices = () => {
		this.setState(prevState => ({
			visible4: !prevState.visible4,
		}))
	}
	Contacts = () => {
		this.setState(prevState => ({
			visible5: !prevState.visible5,
		}))
	}

	render() {
		return (
			<section className={css.menuDrop}>
				<div className='container'>
					<div className={css.dropDownMenu}>
						<div className={css.dropDownMenuDiv}>
							<div className={css.menuIkon}>
								<a href='#' onClick={this.Payment}>
									<GiReceiveMoney className={css.icon} size={iconSize.l} />
									<div>Payment</div>
								</a>
							</div>
							<div className={css.menuIkon}>
								<a href='#' onClick={this.Delivery}>
									<TbTruckDelivery className={css.icon} size={iconSize.l} />
									<div>Delivery</div>
								</a>
							</div>
							<div className={css.menuIkon}>
								<a href='#' onClick={this.Return}>
									<TbTruckReturn className={css.icon} size={iconSize.l} />
									<div>Return</div>
								</a>
							</div>
							<div className={css.menuIkon}>
								<a href='#' onClick={this.Advices}>
									<BiMessageSquare className={css.icon} size={iconSize.l} />
									<div>Advices</div>
								</a>
							</div>
							<div className={css.menuIkon}>
								<a href='#' onClick={this.Contacts}>
									<BsFillTelephoneFill className={css.icon} size={iconSize.l} />
									<div>Contacts</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				{this.state.visible1 && <Payment />}
				{this.state.visible2 && <Delivery />}
				{this.state.visible3 && <Return />}
				{this.state.visible4 && <Advices />}
				{this.state.visible5 && <Contacts />}
			</section>
		)
	}
}

export default MenuDropMenu
