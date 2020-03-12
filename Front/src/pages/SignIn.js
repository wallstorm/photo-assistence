import React, { Component } from "react";
import {Link} from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

import Footer from "../components/globals/Footer"
import Header from "../components/globals/Header";
import * as actions from "../actions";
import CustomInput from "../components/CustomInput";
import "./css/signin.css";

class KSignIn extends Component {

    onSubmit = async (formData) => {
        await this.props.signIn(formData);
        //if (!this.props.errorMessage) {
            //this.props.history.push("/");
        //}
    }

    responseGoogle = async (res) => {
        await this.props.oauthGoogle(res.accessToken);
        console.log("responseGoogle:", res);
        if (!this.props.errorMessage) {
            this.props.history.push("/");
        }
    }

    responseFacebook = async (res) => {
        console.log("responseFacebook:", res);
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push("/");
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="signin-main">
                <div>
                    <Header />
                </div>
                        <div className="registro-form-div-signin">
                            <img src="userviolet.png" className="logo-signin" />
                            <h1>Ingresar Cuenta</h1>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
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

                                {this.props.errorMessage ?
                                    <div className="alert alert-danger">
                                        {this.props.errorMessage}
                                    </div> : null}

                                <input type="submit" className="boton-gral-signin boton-rosa-signin" />
                                <p className="have-account-signin">¿No tienes una cuenta?<Link to={"/signup"} className="link-go-signin">Registrate aquí</Link></p>
                                <FacebookLogin
                                    appId="186588065925090"
                                    autoLoad={false}
                                    textButton="Ingresa con Facebook"
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    cssClass="boton-facebook-signin"
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
    reduxForm({ form: "signin" })
)(KSignIn);