import React, {Component} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";

import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto"
import KSignIn from "./components/KSignIn";
import KSignUp from "./components/KSignUp"
import Servicios from "./components/Servicios"
import Error from "./components/Error";
import Admin from "./components/Admin";
import SingleServicio from "./components/SingleServicio";
import Fotografos from "./components/Fotografos";
import Terminos from "./components/Terminos";
import Profile from "./components/Profile";

import Header from "./components/globals/Header";
import HeaderLogin from "./components/globals/HeaderLogin/HeaderLogin";
import Footer from "./components/globals/Footer"
import AdmNosotros from "./components/admin/AdmNosotros";
import reducers from "./reducers";
import authGuard from "./components/HOCs/authGuard";
import offComponent from "./components/HOCs/offComponent";

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
                                <Route path="/signin" component={offComponent(KSignIn)} />
                                <Route path="/signup" component={offComponent(KSignUp)} />
                                <Route path="/profile" component={authGuard(Profile)} />
                                <Route exact path="/terminosycondiones" component={Terminos} />

                                {/* Rutas admin */}
                                <Route path="/admin" component={Admin} />
                                <Route path="/admins/nosotros" component={AdmNosotros} />

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