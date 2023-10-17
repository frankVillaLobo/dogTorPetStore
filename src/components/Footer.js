import React from 'react';
//img
import pagoSeguro from '../img/pagoSeguro.png';
import playStore from '../img/playStore.png';
import appStore from '../img/appStore.png';
import huaweiStore from '../img/huaweiStore.png';
// css
import '../css/Footer.css';
const Footer = () => {
	return (
		<div id='Footer'>
			<img id='pago-seguro' src={pagoSeguro}></img>
			<div id='info-footer'>
				<p>Contacto: 300 9108493</p>
				<p>Soporte tecnico: servicioclientes@dogtor.com.co</p>
				<p>NIT: 901.110.407 -8</p>
			</div>
			<div id='download-info'>
				<img src={playStore}></img>
				<img src={appStore}></img>
				<img src={huaweiStore}></img>
			</div>
		</div>
	);
};

export default Footer;
