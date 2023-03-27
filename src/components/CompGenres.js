import React, { Component } from "react";
import dataSongs from '../json/dataSongs.json';


class CompGenres extends Component{
    render(){
        return (
            this.props.listaGeneros.map(genero=>{
                return <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p style={{pointerEvents: "none", userSelect: "none"}}>{genero.nombre}</p>
                            <span className="badge rounded-pill" style={{userSelect: "none"}}>{dataSongs.filter(song => song.genero.id_genero === genero.id_genero).length}</span>
                        </li>
            })
        );
    }
}

export default CompGenres