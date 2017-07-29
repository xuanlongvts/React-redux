import React, { Component } from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';

class Main extends Component{

    render() {
        return (
            <div className="main">
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Main;