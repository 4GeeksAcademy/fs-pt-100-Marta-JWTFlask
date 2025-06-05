import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><i class="fa-solid fa-dragon"></i></a>
				<button 
					className="navbar-toggler" 
					type="button" 
					data-bs-toggle="offcanvas" 
					data-bs-target="#offcanvasNavbar" 
					aria-controls="offcanvasNavbar" 
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div 
					className="offcanvas offcanvas-end" 
					tabIndex="-1" 
					id="offcanvasNavbar" 
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-header text-bg-dark">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">MyApp</h5>
						<button 
							type="button" 
							className="btn-close" 
							data-bs-dismiss="offcanvas" 
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body text-bg-dark">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Gallery</a>
							</li>
							<li className="nav-item dropdown">
								<a 
									className="nav-link dropdown-toggle" 
									href="#" 
									role="button" 
									data-bs-toggle="dropdown" 
									aria-expanded="false"
								>
									Products
								</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">New Arrivals</a></li>
									<li><a className="dropdown-item" href="#">Best Sellers</a></li>

								</ul>
							</li>
						</ul>
						<form className="d-flex mt-3" role="search">
							<input 
								className="form-control me-2" 
								type="search" 
								placeholder="Search" 
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};
