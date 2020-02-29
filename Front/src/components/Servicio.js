import React from "react";
import { Link } from "react-router-dom";
import "./servicio.css";

const Servicio = (props) => {
    const {id, titulo, imagen} = props.informacion;
    return (
            <div className="card">
                <img src={`/${imagen}.jpg`} alt={titulo} />
                <h3 className="title">{titulo}</h3>
                <p>Descripcion de la carta, algo corto y preciso</p>
                <Link className="a" to={`/servicio/${id}`}>Más Información</Link>
            </div>
    )
}

export default Servicio;