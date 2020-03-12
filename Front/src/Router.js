import React, {Component} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import Servicios from "./pages/Servicios"
import Error from "./components/Error";
import SingleServicio from "./components/SingleServicio";
import Fotografos from "./pages/Fotografos";
import Terminos from "./pages/Terminos";
import Profile from "./pages/Profile";

import Header from "./components/globals/Header";
import HeaderLogin from "./components/globals/HeaderLogin/HeaderLogin";
import Footer from "./components/globals/Footer"

import Admin from "./pages/Admin";
import reducers from "./reducers";
import authGuard from "./components/HOCs/authGuard";
import test from "./components/HOCs/login-reg-hidden";

const jwtToken = localStorage.getItem("JWT_TOKEN");
axios.defaults.headers.common["Authorization"] = jwtToken;

class Router extends Component {

    render() {
        return(
            <div>
                <Provider store={createStore(reducers, {
                    auth: {
                        token: jwtToken,
                        isAuthenticated: jwtToken ? true : false
                    }
                }, applyMiddleware(reduxThunk))}>
                    <BrowserRouter>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Inicio} />
                                <Route exact path="/nosotros" component={Nosotros} />
                                <Route exact path="/contacto" component={Contacto} />
                                <Route exact path="/servicios" render={() => (
                                    <Servicios servicios={this.props.datos} />
                                )} />
                                <Route exact path="/servicio/:servicioId" render={(props) => {
                                    let idServicio = props.location.pathname.replace("/servicio/", "");
                                    return (
                                        <SingleServicio
                                            servicio={this.props.datos[idServicio]}
                                        />
                                    )
                                }} />
                                <Route path="/fotografos" component={Fotografos} />
                                <Route path="/signin" component={test(SignIn)} />
                                <Route path="/signup" component={test(SignUp)} />
                                <Route path="/profile" component={authGuard(Profile)} />
                                <Route exact path="/terminosycondiones" component={Terminos} />

                                {/* Rutas admin */}
                                <Route path="/admin" component={Admin} />

                                <Route component={Error} />

                            </Switch>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
            
        )
    }
}

export default Router;