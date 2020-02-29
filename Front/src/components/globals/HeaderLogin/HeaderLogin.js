import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./HeaderLogin.css";

const HeaderLogin = () => {
    return (
        <header>
            <div className="logo-header-login">
                <Link to={"/"}><img src="../logo01.png" width="300px" alt="logo" /></Link>
            </div>
            <FontAwesomeIcon icon={faBars} className="menu-toggle" />
            <ul className="nav">
                <li><Link to={"/servicios"}>Servicios</Link></li>
                <li><Link to={"/nosotros"}>Nosotros</Link></li>
                <li><Link to={"/contacto"}>Contacto</Link></li>
                <li><Link to={"/fotografos"}>¿Sos fotográfo?</Link></li>
                <li>
                    <Link to={"/#"}>
                        <FontAwesomeIcon icon={faUser} className="user" />
                        Cuenta
                        <FontAwesomeIcon icon={faChevronDown} className="font" />
                    </Link>
                    <ul>
                        <li><Link to={"/#"}>Mi inicio</Link></li>
                        <li><Link to={"/#"}>Salir</Link></li>
                    </ul>
                </li>
            </ul>
        </header>
    )
}

export default HeaderLogin;