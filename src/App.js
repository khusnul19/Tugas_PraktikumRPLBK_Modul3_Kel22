import React from 'react';
import './App.css';
import Home from "./Sembako/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "10px", marginLeft: "550px", marginRight: "550px", background: "rgba(0,255,0,0.3)" }}>                     
        <h1>KHUSNU.MART</h1>
        <h3>[Pusat Beras Berkualitas "Kelompok 22"]</h3>
        <div style={{ border: "7px solid red" }}>         
        <Home />
        </div>
        </div>
      </div>
    )
  }
}

export default App;