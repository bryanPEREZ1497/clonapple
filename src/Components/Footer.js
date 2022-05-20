import React from 'react';
import '../style.css';
export default function Footer() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        margin: '0 350px',
        justifyItems:' start',
        justifyContent: 'start'
      }}
    >
      <div className="Footer">
        <p>
          1. $4.99 al mes al finalizar el periodo de prueba gratis. Sin
          compromisos. El plan se renovará automáticamente hasta que se cancele.
          Los precios están expresados en dólares estadounidenses y pueden
          variar por país. Se requiere una tarjeta de crédito internacional para
          completar la suscripción.
        </p>
        <p>
          2. La prueba gratis de Apple One incluye sólo los servicios que no
          estés usando actualmente mediante una prueba gratis o suscripción. El
          plan se renovará automáticamente hasta que se cancele. Sujeto a
          restricciones y otros términos.
        </p>
        <p>
          3. Apple TV+ cuesta $4.99 al mes al finalizar el periodo de prueba
          gratis. Una suscripción por grupo de Compartir en Familia. Promoción
          válida durante 3 meses después de la activación de un dispositivo
          elegible. El plan se renovará automáticamente hasta que se cancele.
          Sujeto a restricciones y otros términos. Los precios están expresados
          en dólares estadounidenses y pueden variar por país. Se requiere una
          tarjeta de crédito internacional para completar la suscripción.
        </p>

        <hr style={{ marginTop: '20px' }} />
      </div>
      <ul className="lists">
        <li>
          <b>Descubrir</b>{' '}
        </li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>TV</li>
        <li>Music</li>
        <li>AirPods</li>
        <li>iPod Touch</li>
        <li>Air Tag</li>
      </ul>

      <ul className="lists">
        <li>
          <b>Servicios</b>
        </li>

        <li>Apple Music</li>
        <li>Apple TV+</li>
        <li>Apple Arcade</li>
        <li>iCloud</li>
        <li>Apple One</li>
        <li>Apple Books</li>
        <li>App Store</li>
      </ul>

      <ul className="lists">
        <li>
          <b> Para la empresa</b>
        </li>
        <li>Apple y la empresa</li>
      </ul>

      <ul className="lists">
        <li>
          <b>Valores de Apple</b>{' '}
        </li>
        <li>Accesibilidad</li>
        <li>Medio ambiente</li>

        <li>Privacidad</li>
      </ul>
    </div>
  );
}
