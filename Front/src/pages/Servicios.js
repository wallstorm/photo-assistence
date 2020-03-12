import React, { Component } from "react";
import Servicio from "../components/Servicio";
import Header from "../components/globals/Header";
import Footer from "../components/globals/Footer"
import "./css/servicios.css"

class Servicios extends Component {
    
    render() {
        return(          
            <div className="container">
                <Header />
                <div className="row">
                    {Object.keys(this.props.servicios).map(servicio => (
                        <Servicio
                            informacion={this.props.servicios[servicio]}
                            key={servicio}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Servicios;