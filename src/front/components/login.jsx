import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../index.css";

export const Login = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const data = await userServices.login(formData);
			if (data?.token) {
				dispatch({ type: "set_user", payload: data.user || null });
				navigate("/private");
			}
		} catch (error) {
			console.log("Login failed, redirecting to register...");
			navigate("/register");
		}
	};

	return (
		<div className="home-container">
			<div className="Login-container">
				<form onSubmit={handleSubmit}>
					<h2>Login</h2>
					<input
						className="login-input"
						placeholder="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						type="email"
						required
					/>
					<input
						className="login-input"
						placeholder="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						type="password"
						required
					/>
					<button type="submit" className="login-button">
						Acceder
					</button>
				</form>
			</div>
		</div>
	);
};

