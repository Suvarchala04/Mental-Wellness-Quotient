import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
        <header>
        <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand fs-4 text-white " id="brand">MENTAL WELLNESS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                    <i className="bx bx-menu text-white bx-md"></i>
                </button>
                <div className="collapse navbar-collapse" id="mynav">
                <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                        <Link className="nav-link mx-3 text-white fs-5" to="/"><i className="fa-solid fa-house"></i>  Home</Link>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link mx-3 text-white fs-5" href="">Log-out</a>
                    </li> 
                </ul>
                </div>
        </nav>
        </header>
        </div>
    );
}
export default Header;