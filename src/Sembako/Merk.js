import React, { Component } from "react";
class Merk extends Component {
    state = {
        jenis: " "
    }
    componentDidMount(){
        alert('Show Merk! (Proses mount)')
    }
    ChangeMerk = () => {
        this.setState((state) => { 
            if (state.jenis === "Beras Putih = Rp. 300.000") {
                return {jenis : "Beras Merah = 500.000"}   
            } else {
                return {jenis : "Beras Ketan = Rp. 300.000"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Hide Beras (Proses Unmount)!')
    }
    render() {
        return (
            <div>  
             <h3>(Beras Premium, jenis yang lain ada dimenu "PILIHAN"!)</h3>                       
                <p>1. Beras Basmati = Rp. 400.000</p>  
                <p>2. Beras Melati = Rp. 350.000</p>
                <p>3. Beras Arborio = Rp. 250.000</p>
                <p>4. Beras Risotto = Rp. 300.000</p>
                <p>5. Beras Bomba = Rp. 590.000</p>

                <button onClick={this.ChangeMerk}>Pilihan lain</button>
                <br />
                <p>{this.state.jenis}</p>
            </div>
        );
    }
}
export default Merk;