import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/globals/Header";
import Footer from "../components/globals/Footer";

import * as actions from "../actions/index";

class Profile extends Component {

    async componentDidMount() {
        this.props.getSecret();
    }

    render() {
        return(
            <div>
                <Header />
                <h1>MI PERFIL</h1>
                <Footer />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        secret: state.profile.secret
    }
}

export default connect(mapStateToProps, actions)(Profile);