import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Register = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await userServices.register(formData);
		if (data?.token) {
			navigate("/login");
		}
	};

	return (
		<div className="home-container">
			<div className="Register-container">
				<form onSubmit={handleSubmit}>
					<h2>Register</h2>
					<input
						className="register-input"
						placeholder="Email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						type="email"
					/>
					<input
						className="register-input"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						type="password"
					/>
					<button type="submit" className="register-button">
						Aceptar
					</button>
				</form>
			</div>
		</div>
	);
};
