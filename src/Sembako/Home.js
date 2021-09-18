import { Component } from "react";
import React from "react";
import Beras from "./Beras";
import Merk from "./Merk";

class Home extends Component {
    state = {
        komponen1: true,
        komponen2: true,
    }
      componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Berani Beli Berani Bayar`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('SELAMAT DATANG :)');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Beras /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Harga Beras </button>
                <div style={{ border: "0.5px solid black" }}>
                </div>
                {this.state.komponen2 ? <Merk /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Jenis Merk</button>
            </div>
        );
    }
}
export default Home;