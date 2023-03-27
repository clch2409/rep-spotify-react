import { Component } from "react";
import CompGenres from "./CompGenres";
import CompHeader from "./CompHeader";
import dataGenres from '../json/dataGenres.json'
import { Link } from "react-router-dom";


class CompSongDescription extends Component{
    render(){
        const params= this.props.params

        return(
            this.props.listaCancion.filter(song => song.id === params).map(song => {
                let url_imagen = '../images/' + song.imagen
                return (
                    <div>
                        <CompHeader/>
                        <div class="container contenedor-resumen">
                            <div class="row">
                                <div class="col-3">
                                    <ul className="list-group" style={{width: "25rem"}}>
                                        <CompGenres listaGeneros={dataGenres}/>
                                    </ul>
                                </div>
                                <div class="col-9">
                                    <div className="row">
                                        <div class="card carta_resumen mb-3">
                                            <div class="row no-gutters">
                                                <div class="col-md-4" style={{padding: "0"}}>
                                                    <img src={url_imagen} class="card-img" alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body cuerpo_carta">
                                                        <h4 class="card-title">Nombre de la Cancion: <strong>{song.nombre}</strong></h4>
                                                        <h4 class="card-title">Artista/s: <strong>{song.artista}</strong></h4>
                                                        <h4 class="card-title">Álbum: <strong>{song.album}</strong></h4>
                                                        <h4 class="card-title">Reproducciones: <strong>{song.reproducciones}</strong></h4>
                                                        <h4 class="card-title">Idioma: <strong>{song.idioma}</strong></h4>
                                                        <h4 class="card-title">Género: <strong>{song.genero.nombre}</strong></h4>
                                                        
                                                        <Link to={'/songList'} class="btn btn-danger volver">
                                                            <i class="bi bi-backspace-fill volver-resumen"></i>Menú Principal
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                )
            })
            
        );
    }
}

export default CompSongDescription