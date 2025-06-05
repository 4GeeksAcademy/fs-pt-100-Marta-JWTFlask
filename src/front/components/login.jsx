import { useState } from "react"
import userServices from "../services/userServices"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "../index.css"

export const Login = () => {
    const { store, dispatch } = useGlobalReducer()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        userServices.login(formData).then(data => console.log(data))
    }

    return (
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
    )
}
