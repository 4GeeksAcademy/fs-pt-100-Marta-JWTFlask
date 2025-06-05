import { Link } from "react-router-dom";
import { Login } from "../components/login";
import { useNavigate } from "react-router-dom";

import "../index.css";

export const Home = () => {
	const navigate = useNavigate()

	const handelProfile = () => {
		localStorage.getItem("token")? navigate ("/private") : navigate("/login")
	};
	return (
		<div className="home-container">
			<div className="Login-container">
				<Login />
				<p className="text-center text-black mt-3">
					¿No tienes cuenta? <Link to="/register" className="text-info">Regístrate</Link> aquí
				</p>
				<p className="text-center text-black mt-3">
					Your <Link to="/private" className="text-info">Profile</Link>
				</p>
			</div>
		</div>
	);
};
