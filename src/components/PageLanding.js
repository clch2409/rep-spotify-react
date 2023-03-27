import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageLanding extends Component{
    render(){
        return (
            <div className="contenedor-landing">
            <figure>
                <i className="bi bi-spotify" style={{fontSize: "20rem", placeSelf: "center"}}></i>
                <div className="contenedor-landing-text">
                    <p>¡Bienvenido a la Experiencia <strong>Spotify</strong>!</p>
                    <p>Se le mostrán diferentes cajitas que representan diferentes canciones, las cuales contarán con:</p>
                    <ol>
                        <li>Un botón verde, que al presionarlo, los direccionará a la canción respectiva en la plataforma de <strong>Spotify</strong></li>
                        <li>Cada vez que presione el botón verde la canción, el contador de la parte superior derecha aumentará</li>
                        <li>Si hace click en el nombre de la cación, se mostrará una pequeña descripción de la canción</li>
                    </ol>
                    <p>¡Esperamos que disfute esta experiencia!</p>
                </div>
                <Link to='/songList'>
                    <button className="btn btn-success">Ingresar</button>
                </Link>
            </figure>
        </div>
        );
    }
}

export default PageLanding