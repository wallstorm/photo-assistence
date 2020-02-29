import React, { Component } from "react";
import {Link} from "react-router-dom";
import Footer from "./globals/Footer"
import Header from "./globals/Header";
import "./signin.css";

class SignIn extends Component {
    render() {      
        return(
            <div className="signin-main">
                <div>
                    <Header />
                </div>
                    <div className="registro-form-div-signin">
                        <img src="userviolet.png" className="logo-signin" />
                        <h1>Ingresar Cuenta</h1>
                        <form>
                            <input type="email" className="input-reg-signin" name="username" placeholder="Mail" />
                            <input type="password" className="input-reg-signin" placeholder="Password" />
                            <button type="button" className="boton-gral-signin boton-rosa-signin">Entrar</button>
                            <hr />
                            <p className="or-registro-signin">OR</p>
                            <button type="button" className="boton-gral-signin boton-facebook-signin">Entrar con Facebook</button>
                            <p className="have-account-signin">¿No tienes una cuenta?<Link to={"/signup"} className="link-go-signin">Registrate aquí</Link></p>
                        </form>
                        
                        </div>
                <div className="registro-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SignIn;