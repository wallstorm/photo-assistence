import React, { Component } from "react";
import {Link} from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

import "./signup.css";
import Profile from "./Profile";
import Footer from "./globals/Footer"
import Header from "./globals/Header";
import * as actions from "../actions";
import CustomInput from "./CustomInput";

class KSignUp extends Component {
    state = {
        checkboxOK: false
    }

    onChangeBox = (e) => {
        console.log(e.target.checked);
        this.setState({
            checkboxOK: e.target.checked
        });
        console.log(this.state);
    }

    onSubmit = async (formData) => {
        console.log("onSubmit() got called");
        console.log("formData", formData);
        // We need to call some action
        await this.props.signUp(formData);
        //if (!this.props.errorMessage) {
            // this.props.history.push("/");
        // }
    }

    responseGoogle = async (res) => {
        console.log("responseGoogle:", res);
        await this.props.oauthGoogle(res.accessToken);
        // if (!this.props.errorMessage) {
            // this.props.history.push("/");
        // }
    }

    responseFacebook = async (res) => {
        console.log("responseFacebook:", res);
        await this.props.oauthFacebook(res.accessToken);
        // if (!this.props.errorMessage) {
            // this.props.history.push("/");
        // }
    }

    render() {
        const { handleSubmit } = this.props;
        
        return (
            <div className="registro-main">
                <div>
                    <Header />
                </div>
                <div className="registro-form-div">
                    <img src="logouser.png" className="logo-signup" />
                    <h1>Registro</h1>
                    <form onSubmit={handleSubmit(this.onSubmit)} className="registro-form">
                        <fieldset>
                            <Field
                                name="email"
                                type="text"
                                id="email"
                                placeholder="ejemplo@ejemplo.com"
                                component={CustomInput} />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Contraseña"
                                component={CustomInput} />
                        </fieldset>
                        <span><input type="checkbox" onChange={this.onChangeBox} checked={this.state.checkboxOK} className="checkbox-signup"/></span><Link to={"/terminosycondiones"} className="terminos-signup">¿Acepta los terminos de servicio?</Link>
                        
                        { this.props.errorMessage ? 
                        <div className="alert alert-danger">
                            { this.props.errorMessage}
                        </div> : null }

                        <button type="submit" disabled={!this.state.checkboxOK} className="boton-gral boton-rosa-signup">Registrar</button>
                        <p className="have-account-signin">¿Ya tienes una cuenta?<Link to={"/signin"} className="link-go-signin">Ingresa aquí</Link></p>
                        <hr />
                        <p className="or-registro">OR</p>
                        <FacebookLogin
                            appId="186588065925090"
                            autoLoad={false}
                            textButton="Ingresar con Facebook"
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            cssClass="boton-facebook"
                        />
                        <GoogleLogin
                            clientId="168154205185-dhbeg0mg6d25h2dhpadnat4qhqv1aonb.apps.googleusercontent.com"
                            buttonText="Ingresar con Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="boton-google">Ingresar con Google</button>
                              )}
                        />
                    </form>         
                </div> 
                <div className="registro-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: "signup" })
)(KSignUp);

