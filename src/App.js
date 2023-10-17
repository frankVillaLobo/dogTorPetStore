import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
	let Component;
	switch (window.location.pathname) {
		case '/':
			Component = Inicio;
			break;
		case '/productos':
			Component = Productos;
			break;
		case '/carrito':
			Component = Carrito;
			break;
		case '/aboutus':
			Component = Aboutus;
			break;
		case '/login':
			Component = Login;
			break;
		case '/signin':
			Component = Signin;
			break;
	}
	return (
		<div>
			<Navbar />
			<Component />
		</div>
	);
}

export default App;
