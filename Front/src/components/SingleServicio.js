import React from "react";
import Header from "./globals/Header";
import Footer from "./globals/Footer"

const SingleServicio = (props) => {
    const {titulo, imagen} = props.servicio;
    return (
        <div>
            <Header />
            <h2>{titulo}</h2>
            <img src={`/${imagen}.jpg`} alt={titulo}/>
            <Footer />
        </div>
    )
}

export default SingleServicio;