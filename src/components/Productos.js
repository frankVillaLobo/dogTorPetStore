import React from 'react';
import '../css/Productos.css';

//productos para mockup
import Perro from '../img/perro1.png';
import Alimento1 from '../img/alimento1.jpeg';
import Alimento2 from '../img/alimento2.jpeg';
import Alimento3 from '../img/alimento3.jpeg';
import Dentalife from '../img/dentalife.jpeg';
import DentaStix from '../img/dentastix.jpeg';
import Locion from '../img/locion.jpeg';
import Nextgard from '../img/nextgard.jpeg';

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
						<img src={Perro} alt='panholetaPerro'></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 16.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={Alimento1} alt='alimento1'></img>
						<p id='categ-producto'>Alimentos</p>
						<p id='nombre-producto'>DogChow Alimento</p>
						<p id='precio-producto'>COP$ 25.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={Alimento2} alt='alimento2'></img>
						<p id='categ-producto'>Alimentos</p>
						<p id='nombre-producto'>Doncan Alimento</p>
						<p id='precio-producto'>COP$ 29.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={Alimento3} alt='alimento3'></img>
						<p id='categ-producto'>Juguetes y pañoletas</p>
						<p id='nombre-producto'>Pañoleta superheroe</p>
						<p id='precio-producto'>COP$ 31.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={Dentalife} alt='dentalife'></img>
						<p id='categ-producto'>Medicamentos</p>
						<p id='nombre-producto'>Dentalife</p>
						<p id='precio-producto'>COP$ 82.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={DentaStix} alt='dentastix'></img>
						<p id='categ-producto'>Medicamentos</p>
						<p id='nombre-producto'>DentaStix</p>
						<p id='precio-producto'>COP$ 74.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={Locion} alt='locion'></img>
						<p id='categ-producto'>Estética</p>
						<p id='nombre-producto'>Loción para mascotas</p>
						<p id='precio-producto'>COP$ 33.900</p>
						<button>Agregar al carrito</button>
					</div>
					<div class='producto'>
						<img src={Nextgard} alt='nextgard'></img>
						<p id='categ-producto'>Medicamentos</p>
						<p id='nombre-producto'>NextGuard</p>
						<p id='precio-producto'>COP$ 101.700</p>
						<button>Agregar al carrito</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Productos;
