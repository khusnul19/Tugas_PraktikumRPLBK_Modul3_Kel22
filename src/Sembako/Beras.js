import React, { Component } from "react";
class Beras extends Component {
    state = {
        harga: 0
    }
     componentDidMount(){
        alert('Show Beras! (Proses mount)')
}
    tambahharga = () => {
        this.setState((state) => { return { harga: state.harga + 12.000 } })
    }
    kurangiharga = () => {
        this.setState((state) => { return { harga: state.harga - 12.000 } })
    }
    componentWillUnmount(){
        alert('Hide Beras (Unmount)!')
    }
    render() {
        return (
            <div>
            <h3>(HARGA BERAS MINIM 12 RIBUU!!)</h3>
                <p>1. BERAS 1Kg = Rp. 12.000</p>
                <p>2. BERAS 2Kg = Rp. 24.000</p>
                <p>3. BERAS 3Kg = Rp. 36.000</p>
                <h4>BERAS YANG MAU DIBELI : Rp {this.state.harga} </h4>
                
                <button onClick={this.tambahharga}>Tambah</button>
                <button onClick={this.kurangiharga}>Kurang</button>
                <br/>
                <p>{this.state.harga}</p>
            </div>
        );
    }
}
export default Beras;