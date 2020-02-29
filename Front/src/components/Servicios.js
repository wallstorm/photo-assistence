import React, { Component } from "react";
import Servicio from "./Servicio";
import Header from "./globals/Header";
import Footer from "./globals/Footer"
import "./servicios.css"

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