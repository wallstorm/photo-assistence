import React, { Component } from "react";
import Header from "../components/globals/Header";
import Footer from "../components/globals/Footer"
import "./css/contacto.css"
import axios from "axios";

class Contacto extends Component {
    state = {
        name: '',
        email: '',
        tel: "",
        message: '',
        sent: false,
        buttonText: 'Enviar Mensaje'
    }

    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...enviando'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel,
            message: this.state.message
        }
        
        axios.post('http://localhost:4000/api/v1', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            tel: '',
            buttonText: 'Enviar Mensaje'
        })
    }

    render() {
        return(
            <div className="wrapper-main">
                <div className="contact-header">
                    <Header />
                </div>
                <div className="wrapper-form"> 
                    <h2>Contacto</h2>
                    <form onSubmit={ (e) => this.formSubmit(e) }>
                        <div className="input-field">
                            <input type="text" onChange={e => this.setState({ name: e.target.value})} value={this.state.name} name="" required />
                            <label>Nombre</label>
                        </div>
                        <div className="input-field">
                            <input type="email" onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} name="" required />
                            <label>Mail</label>
                        </div>
                        <div className="input-field">
                            <input type="tel" onChange={(e) => this.setState({ tel: e.target.value})} value={this.state.tel} name="" required />
                            <label>Telefono</label>
                        </div>
                        <div className="input-field">
                            <textarea onChange={e => this.setState({ message: e.target.value})} value={this.state.message} row="5" required></textarea>
                            <label>Mensaje</label>
                        </div>
                        <input type="submit" name="" value={ this.state.buttonText } className="btn-send" />
                    </form>
                </div> 
                <div className="contact-footer">
                    <Footer />
                </div>
            </div>
            
        )
    }
}

export default Contacto;