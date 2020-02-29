import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

class Header extends Component {
    signOut = () => {
        console.log("signOut got called");
        this.props.signOut();
    }

    render() {
        return (
            <header className="header-main">
                <div className="logo-header">
                    <Link to={"/"}><img src="../logo01.png" width="300px" alt="logo" /></Link>
                </div>
                <FontAwesomeIcon icon={faBars} className="menu-toggle-header" />
                <ul className="nav-header">
                    { !this.props.isAuth ? 
                        [<li className="li-header" key="signin"><Link to={"/signin"}>Iniciar Sesion</Link></li>,
                        <li className="li-header" key="signup"><Link to={"/signup"}>Registrarse</Link></li>]
                    : null}

                    { this.props.isAuth ?
                        [<li className="li-header"><Link to={"/"} onClick={this.signOut}>Salir</Link></li>,
                        <li className="li-header"><Link to={"/profile"}>Mi Perfil</Link></li>]
                    : null}
                    <li className="li-header"><Link to={"/servicios"}>Servicios</Link></li>
                    <li className="li-header"><Link to={"/nosotros"}>Nosotros</Link></li>
                    <li className="li-header"><Link to={"/contacto"}>Contacto</Link></li>
                    <li className="li-header"><Link to={"/fotografos"}>¿Sos fotográfo?</Link></li>
                    
                    
                </ul>
            </header>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps, actions)(Header);