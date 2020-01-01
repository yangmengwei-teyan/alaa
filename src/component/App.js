import React, { Component } from 'react';
import Con from './阿里巴巴/content'
import Header from './阿里巴巴/header'
import Footer from './阿里巴巴/footer'
class App extends Component {
    render() {
        return (
            <div>
            <Header></Header>
                <Con></Con>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;