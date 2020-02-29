import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text">photo<span>assistence</span></h1>
                        <p>Descripcion de la empresa, un poco mas de espacio para chamuyar. Corto y conciso para entender las cosas.</p>
                        <div className="contact">
                            <span><FontAwesomeIcon icon={faMobileAlt} />&nbsp; 3518195169</span>
                            <span><FontAwesomeIcon icon={faEnvelopeSquare} />&nbsp; photoassistence@gmail.com</span>
                        </div>
                        <div className="socials">
                            <a href="http://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a href="http://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <Link to={"/nosotros"}><li>Nosotros</li></Link>
                            <Link to={"/servicios"}><li>Servicios</li></Link>
                            <Link to={"/contacto"}><li>Contacto</li></Link>
                            <Link to={"/terminosycondiones"}><li>Términos y condiciones</li></Link>
                        </ul>
                        
                    </div>
                    <div className="footer-section contact-form">
                        <h2>¿Sos fotográfo?</h2>
                        <p>Escribir una descripcion para los fotofrafos interesados 
                            en trabajar con nosotros. Algo corto y directo.
                            Podria ser algo asi como los requisitos y un link que lleve directo 
                            a la pagina correspondiente.
                        </p>
                        
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; photo-assistence.com | Designed by Wall Group
                </div>
            </div>
        )
    }
}

export default Footer;