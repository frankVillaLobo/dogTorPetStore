import React from 'react'
import { useState } from "react";
import '../css/Formulario.css';
import user_icon from '..//img/user.png'
import email_icon from '../img/email.png'
import password_icon from '../img/password.png'
import registro_imagen from '../img/registro_imagen.jpg'; // Agrega la ruta de tu imagen de registro

const Login = () => {
	const [action,setAction] =useState("Registrarse");

	return (
		<body>
			<div class="mi-vista">
		<div className='container'>
			<div className='header'>
			<img src={registro_imagen} alt="" /> {/* Aquí se agrega la imagen */}
			 <div className='text'>{action}</div>
			  <div className="underline"></div>
		</div>
		 <div className="inputs">
			{action==="Iniciar sesión"?<div></div>:<div className="input">
			 <img src={user_icon} alt="" />
			 <input placeholder="Nombre" type="text"/>
	    </div>}
		 <div className="input">
			<img src={email_icon} alt="" />
			<input type="email" placeholder="Correo Electronico" />
		 </div>
		 <div className="input">
			<img src={password_icon} alt="" />
			<input type="password" placeholder='Contraseña' />
		 </div>
		 </div>
		 <div className='forgot_password'>Olvidaste la contraseña? <span>Haz click aquí</span></div>
		 <div className='submit-container'>
			<div className={action==="Iniciar sesión"? "submit-gray": "submit"} onClick={()=>{setAction("Iniciar sesión")}}>Iniciar sesión</div>
			<div className={action==="Registrarse"? "submit-gray": "submit"} onClick={()=>{setAction("Registrarse")}}>Registrarse</div>
		 </div>
		</div>
		</div>
		</body>

	)
}

export default Login