import React from 'react';
// imagenes para el mockup
import Alimento1 from '../img/alimento1.jpeg';
import Dentalife from '../img/dentalife.jpeg';
import Locion from '../img/locion.jpeg';

//componentes extra
import Footer from './Footer';

import '../css/Carrito.css';

const Carrito = () => {
	return (
		<div>
			<h1>Carrito</h1>
			<section class='carrito'>
				<h2>Productos en tu carrito</h2>
				<ul>
					<li>
						<img src={Alimento1} alt='alimento1'></img>
						<div class='detalle-producto'>
							<h3>DogChow Alimento</h3>
							<p class='categ-producto'>Categoria: Alimentos</p>

							<p>Precio: COP$ 25.900</p>
							<p>
								Cantidad: <input type='number' value='1' min='1'></input>
							</p>
							<button class='eliminar'>Eliminar</button>
						</div>
					</li>
					<li>
						<img src={Dentalife} alt='dentalife'></img>
						<div class='detalle-producto'>
							<h3>Dentalife</h3>
							<p class='categ-producto'>Categoria: Medicamentos</p>

							<p>Precio: COP$ 82.900</p>
							<p>
								Cantidad: <input type='number' value='1' min='1'></input>
							</p>
							<button class='eliminar'>Eliminar</button>
						</div>
					</li>
					<li>
						<img src={Locion} alt='locion'></img>
						<div class='detalle-producto'>
							<h3>Locion</h3>
							<p class='categ-producto'>Categoria: Estética</p>

							<p>Precio: COP$ 33.900</p>
							<p>
								Cantidad: <input type='number' value='1' min='1'></input>
							</p>
							<button class='eliminar'>Eliminar</button>
						</div>
					</li>
				</ul>
			</section>
			<div class='container'>
				<section class='resumen'>
					<h2>Resumen de Compra</h2>
					<div>
						<p>
							Total de Artículos: <span id='total-articulos'>3</span>
						</p>
						<ul>
							<li>DogChow Alimento</li>
							<li>Dentalife</li>
							<li>Locionto</li>
						</ul>
						<p>
							Total a Pagar: <span id='total-pagar'>COP$ 125.800</span>
						</p>
						<button class='comprar'>Comprar Ahora</button>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
};

export default Carrito;
