import '../css/Productos.css';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
//productos para mockup
import perro from '../img/perro1.png';

import Alimento1 from '../img/alimento1.jpeg';
import Alimento2 from '../img/alimento2.jpeg';
import Alimento3 from '../img/alimento3.jpeg';
import Alimento4 from '../img/alimento4.jpeg';
import Alimento5 from '../img/alimento5.jpeg';
import Alimento6 from '../img/alimento6.jpeg';

import Juguete1 from '../img/juguete1.jpeg';
import Juguete2 from '../img/juguete2.jpeg';
import Juguete3 from '../img/juguete3.jpeg';
import Juguete4 from '../img/juguete4.jpeg';
import Juguete5 from '../img/juguete5.jpeg';

import BanhoSeco from '../img/banhoSeco.jpeg';
import PeineMascotas from '../img/peineMascotas.jpeg';
import Dentalife from '../img/dentalife.jpeg';
import DentaStix from '../img/dentastix.jpeg';
import Locion from '../img/locion.jpeg';
import Nextgard from '../img/nextgard.jpeg';

import Medicamento1 from '../img/medicamento1.jpeg';
import Medicamento2 from '../img/medicamento2.jpeg';
import Medicamento3 from '../img/medicamento3.jpeg';

const Productos = () => {
	let productos = [
		{
			categoria: 'Juguetes',
			nombre: 'Pañoleta superheroe',
			precio: 25000,
			imagen: perro,
			altName: 'panholetaSuperheroe',
		},
		{
			categoria: 'Alimentos',
			nombre: 'DogChow Alimento',
			precio: 45000,
			imagen: Alimento1,
			altName: 'croquetasPerro_DogChow',
		},
		{
			categoria: 'Alimentos',
			nombre: 'Doncan Alimento',
			precio: 52000,
			imagen: Alimento2,
			altName: 'croquetasPerro_Doncan',
		},
		{
			categoria: 'Alimentos',
			nombre: 'Bocaditos DogChow',
			precio: 12000,
			imagen: Alimento3,
			altName: 'bocaditos_DogChow',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'Dentalife',
			precio: 31000,
			imagen: Dentalife,
			altName: 'dentalife',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'DentaStix',
			precio: 12000,
			imagen: DentaStix,
			altName: 'dentastik',
		},
		{
			categoria: 'Estética',
			nombre: 'Loción para mascotas',
			precio: 8000,
			imagen: Locion,
			altName: 'locion_perros',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'NextGuard',
			precio: 70000,
			imagen: Nextgard,
			altName: 'nextgard',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'Baño Seco para perros',
			precio: 24500,
			imagen: BanhoSeco,
			altName: 'banhoSecoPerros',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'Peine mascotas',
			precio: 11000,
			imagen: PeineMascotas,
			altName: 'peineMascotas',
		},
		{
			categoria: 'Juguetes',
			nombre: 'Rascador de encias',
			precio: 8000,
			imagen: Juguete1,
			altName: 'rascadorEncias',
		},
		{
			categoria: 'Juguetes',
			nombre: 'Hueso para morder',
			precio: 6000,
			imagen: Juguete2,
			altName: 'huesoMorder',
		},
		{
			categoria: 'Alimentos',
			nombre: 'Concentrado NutreCan',
			precio: 24500,
			imagen: Alimento4,
			altName: 'concentradoNutrecan',
		},
		{
			categoria: 'Alimentos',
			nombre: 'Dogourmet Cachorros',
			precio: 32000,
			imagen: Alimento5,
			altName: 'cogurmetCachorros',
		},
		{
			categoria: 'Alimentos',
			nombre: 'Concentrado Chunky Cachorros',
			precio: 18000,
			imagen: Alimento6,
			altName: 'ConcentradoChunky',
		},
		{
			categoria: 'Juguetes',
			nombre: 'Juguete para gatos',
			precio: 52000,
			imagen: Juguete3,
			altName: 'robotGato',
		},
		{
			categoria: 'Juguetes',
			nombre: 'Rascador para gatos',
			precio: 27000,
			imagen: Juguete4,
			altName: 'rascadorgatos',
		},
		{
			categoria: 'Juguetes',
			nombre: 'Aruñador gatos',
			precio: 18000,
			imagen: Juguete5,
			altName: 'rascadorGatos',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'Anti-Diarrea',
			precio: 43000,
			imagen: Medicamento1,
			altName: 'anti-Diarrea',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'Doxiciclina',
			precio: 65000,
			imagen: Medicamento2,
			altName: 'doxiciclina',
		},
		{
			categoria: 'Medicamentos',
			nombre: 'Restaderm',
			precio: 13000,
			imagen: Medicamento3,
			altName: 'restaderm',
		},
	];

	const [productosLista, setProductos] = useState([]);
	useEffect(() => {
		setProductos(productos);
	}, []);

	const catSelectorAlimentos = () => {
		console.log('Clic en alimentos');
		const productosFiltrados = productos.filter(
			(producto) => producto.categoria === 'Alimentos'
		);
		setProductos(productosFiltrados);
	};
	const catSelectorMedicamentos = () => {
		const productosFiltrados = productos.filter(
			(producto) => producto.categoria === 'Medicamentos'
		);
		setProductos(productosFiltrados);
	};
	const catSelectorJuguetes = () => {
		const productosFiltrados = productos.filter(
			(producto) => producto.categoria === 'Juguetes'
		);
		setProductos(productosFiltrados);
	};

	const selectorTodos = () => {
		setProductos(productos);
	};

	return (
		<div>
			<div id='titulo'>
				<h1 onClick={selectorTodos}>Productos</h1>
			</div>
			<div id='categorias'>
				<h3 onClick={catSelectorAlimentos}>Alimentos</h3>
				<h3 onClick={catSelectorJuguetes}>Juguetes</h3>
				<h3 onClick={catSelectorMedicamentos}>Medicamentos</h3>
			</div>
			<div id='page'>
				<div id='producto-lista'>
					{productosLista.map((producto, index) => (
						<div key={index} class='producto'>
							<img src={producto.imagen} alt={producto.altName}></img>
							<p id='categ-producto'>{producto.nombre}</p>
							<p id='nombre-producto'>Categoría: {producto.categoria}</p>
							<p id='precio-producto'>Precio: ${producto.precio}</p>
							<button>Agregar al carrito</button>
						</div>
					))}
				</div>
				<div>
					{/* <button onClick={handleClick}>
						Haz clic aquí para actualizar ({clickCount})
					</button> */}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Productos;
