import React from 'react';
import '../style.css';
export default function NavBar() {
  return (
    <nav className="nav">
      <img
        className="apple"
        src="https://firebasestorage.googleapis.com/v0/b/react-42718.appspot.com/o/logos%2Fmanzana.png?alt=media&token=4e8faf06-2914-4f72-a758-d3da3efbe162"
        width="23px"
        alt=""
        style={{ opacity: 0.8 }}
      />
      <span>Mac</span>
      <span>iPad</span>
      <span>iPhone</span>
      <span>Watch</span>
      <span>TV</span>
      <span>Music</span>
      <span>Soporte</span>
      <span>Dónde Comprar</span>
      <span>&#x1F50D;</span>
    </nav>
  );
}
