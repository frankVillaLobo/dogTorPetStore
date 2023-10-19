import React from 'react';
import Footer from './Footer';
import '../css/Aboutus.css';
const Aboutus = () => {
	return (
		<div id='container'>
			<section id='about-us'>
				<h1>Sobre Nosotros</h1>
				<p>
					Bienvenidos a Tu Tienda de Mascotas, tu destino número uno para todos
					los productos y servicios relacionados con mascotas y veterinaria.
				</p>

				<h2>Nuestra Misión</h2>
				<p>
					En Tu Tienda de Mascotas, nuestra misión es proporcionar a los amantes
					de los animales los productos de alta calidad que sus mascotas
					merecen. Nos esforzamos por crear un entorno en el que cada mascota
					pueda vivir una vida feliz y saludable. Para lograr esto, nos
					comprometemos a:
				</p>
				<ul>
					<li>
						Ofrecer una amplia gama de productos de alta calidad, desde
						alimentos y juguetes hasta accesorios de moda y equipos para el
						cuidado de mascotas.
					</li>
					<li>
						Proporcionar servicios veterinarios excepcionales, que incluyen
						exámenes de salud regulares, vacunas, tratamientos y cirugías cuando
						sea necesario.
					</li>
					<li>
						Educar a nuestros clientes sobre el cuidado responsable de sus
						mascotas, brindando consejos y recomendaciones basados en la mejor
						práctica veterinaria.
					</li>
					<li>
						Fomentar la adopción y la protección de animales abandonados y
						necesitados a través de colaboraciones con refugios y organizaciones
						de rescate.
					</li>
				</ul>

				<h2>Nuestro Equipo</h2>
				<p>
					Nuestro equipo está formado por un grupo apasionado de amantes de los
					animales y profesionales de la veterinaria. Estamos comprometidos con
					la misión de Tu Tienda de Mascotas y dedicados a brindar el mejor
					cuidado y atención a tus mascotas. Algunos de los miembros clave de
					nuestro equipo incluyen:
				</p>
				<ul>
					<li>
						<strong>Dr. Ana Rodríguez, DVM:</strong> Nuestra veterinaria
						principal, con años de experiencia en el cuidado de animales
						domésticos y exóticos. Ella se asegura de que todas las mascotas
						reciban la atención médica adecuada.
					</li>
					<li>
						<strong>Marta López:</strong> Encargada de la tienda y experta en
						productos para mascotas. Marta está siempre dispuesta a asesorarte
						en la elección de los mejores productos para tus mascotas.
					</li>
					<li>
						<strong>Carlos Pérez:</strong> Nuestro entrenador de mascotas
						certificado que ofrece clases de obediencia y comportamiento para
						perros y gatos.
					</li>
				</ul>
				<p>
					Nuestro equipo está disponible para responder a tus preguntas, brindar
					asesoramiento y garantizar que tanto tú como tus mascotas se sientan
					bienvenidos y cuidados en Tu Tienda de Mascotas.
				</p>
			</section>
			<Footer />
		</div>
	);
};

export default Aboutus;
