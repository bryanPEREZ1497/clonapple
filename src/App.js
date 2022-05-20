import React from 'react';
import './style.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import Component6 from './Components/Component6';
import Component7 from './Components/Component7';
import Component8 from './Components/Component8';
import Component9 from './Components/Component9';
export default function App() {
  return (
    <div className="maincontainer">
      <NavBar
        style={{
          display: 'block',
        }}
      />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <div className="grid">
        <Component6 className="cell" />
        <Component7 className="cell" />
        <Component8 className="cell" />
        <Component9 className="cell" />
      </div>
      <Footer />
    </div>
  );
}
