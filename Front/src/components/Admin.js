import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./admin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCamera, faUsers, faBriefcase, faIdBadge, faUserCircle, faShoePrints } from "@fortawesome/free-solid-svg-icons"

class Admin extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <h2>Admin</h2>
                    {/* comentario */}
                    <ul>
                        <li><Link to={""}><FontAwesomeIcon icon={faHome} className="ico"/>Inicio</Link></li>
                        <li><Link to={""}><FontAwesomeIcon icon={faCamera} className="ico"/>Servicios</Link></li>
                        <li><Link to={"/admins/nosotros"}><FontAwesomeIcon icon={faUsers} className="ico"/>Nosotros</Link></li>
                        <li><Link to={""}><FontAwesomeIcon icon={faIdBadge} className="ico"/>Contacto</Link></li>
                        <li><Link to={""}><FontAwesomeIcon icon={faBriefcase} className="ico"/>¿Sos fotográfo?</Link></li>
                        <li><Link to={""}><FontAwesomeIcon icon={faUserCircle} className="ico"/>Cuentas</Link></li>
                        <li><Link to={""}><FontAwesomeIcon icon={faShoePrints} className="ico"/>Footer</Link></li>
                    </ul>
                    <div className="social_media">
                        <a href="http://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="http://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
                <div className="main_content">
                    <div className="header">
                        <Link to={"/"} >www.photo-assistence.com</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;