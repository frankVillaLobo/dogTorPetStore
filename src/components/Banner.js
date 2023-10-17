import React from 'react';
import BannerIMG from '../img/bannerIMG.png';

//Iconos
import percentaje from '../img/percentaje.png';
import bike from '../img/bike.png';
import pet from '../img/pet.png';

// css
import '../css/Banner.css';

const Banner = () => {
	return (
		<div id='banner'>
			{/* banner de anuncios */}
			<div id='anuncios'>
				<p id='main-anuncio'>¡La membresía más cool para mascotas!</p>
				<div id='anuncio'>
					<img src={percentaje} alt='percentaje'></img>
					<p>20% de descuento en toda la tienda</p>
				</div>
				<div id='anuncio'>
					<img src={bike} alt='bike'></img>
					<p>
						Domicilios GRATIS ilimitados. <br></br>En tus compras superiores a
						$150.000
					</p>
				</div>
				<div id='anuncio'>
					<img src={pet} alt='pet'></img>
					<p>
						Estás apadrinando a un peludo. <br></br>Por cada compra donarás un
						porcentaje.
					</p>
				</div>
			</div>
			<div id='banner-img'>
				<img src={BannerIMG} alt='bannerImg'></img>
			</div>
		</div>
	);
};

export default Banner;
