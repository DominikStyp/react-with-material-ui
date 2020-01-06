import React from 'react';
import PrimarySearchAppBar from "./Layouts/PrimarySearchAppBar";
import Body from "./Layouts/Body";
import Footer from "./Layouts/Footer";
import './App.css';
import MyGridElement from "./Layouts/MyGridElement";

function App() {
  return (
    <div className="App">
    <PrimarySearchAppBar />
    <MyGridElement/>
    <Body />
    <Footer />
    </div>
  );
}

export default App;
