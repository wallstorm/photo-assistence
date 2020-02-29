import React, { Component } from "react";
import {Link} from "react-router-dom";
import Footer from "./globals/Footer"
import Header from "./globals/Header";
import axios from "axios";
import "./signup.css";

class SignUp extends Component {
    state = {
        username: "",
        password: "",
        checkboxOK: false
    }
    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/signup", {
            username: this.state.username,
            password: this.state.password
        })
        console.log(res);
        console.log(this.state);
        this.setState({
            username: "",
            password: ""
        });
        
    }

    onChangeBox = (e) => {
        console.log(e.target.checked);
        this.setState({
            checkboxOK: e.target.checked
        });
    }

    render() {
        return(
            <div className="registro-main">
                <div>
                    <Header />
                </div>
                <div className="registro-form-div">
                    <img src="logouser.png" className="logo-signup" />
                    <h1>Registro</h1>
                    <form onSubmit={this.onSubmit} className="registro-form">
                        <input type="email" onChange={this.onChangeUsername} name="correo" autoFocus className="input-reg" name="username" placeholder="Mail" />
                        <input type="password" onChange={this.onChangePassword} name="password" className="input-reg" placeholder="Password" />
                        <span><input type="checkbox" onChange={this.onChangeBox} checked={this.state.checkboxOK} className="checkbox-signup"/></span><Link to={"/terminosycondiones"} className="terminos-signup">¿Acepta los terminos de servicio?</Link>
                        <button type="submit" disabled={!this.state.checkboxOK} className="boton-gral boton-rosa-signup">Entrar</button>
                        <hr />
                        <p className="or-registro">OR</p>
                        <button type="button" className="boton-gral boton-facebook">Entrar con Facebook</button>
                        <p className="have-account">¿Ya tienes una cuenta?<Link to={"/signin"} className="link-go-signin">Iniciar Sesion</Link></p>
                    </form>
                </div>
                <div className="registro-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SignUp;