import React from 'react';
import '../css/Productos.css';
import Perro from '../img/perro1.png';

const Productos = () => {
	return (
		<div>
			<div id='titulo'>
				<h1>Productos</h1>
			</div>
			<div id='categorias'>
				<h3>Descuentos</h3>
				<h3>Colecciones</h3>
				<h3>Ultimos lanzamientos</h3>
			</div>
			<div id='page'>
				<div id='producto-lista'>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
					<div class='producto'>
						<img src={Perro}></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Productos;
