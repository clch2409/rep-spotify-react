import { Component } from "react";
import { Link } from "react-router-dom";


class CompSongs extends Component{
    render(){
        let url_imagen = "images/" + this.props.songInfo.imagen;
        let url_cancion = this.props.songInfo.cancion
        let url_detalle = "/detalleCancion/" + this.props.songInfo.id
        return (
            
            <div className="card carta-main" style={{width: "18rem"}}>
            <figure>
                <img src={url_imagen} className="card-img-top" alt="..."/>
                <a href={url_cancion} target="_blank" rel="noreferrer" className="btn btn-success play" onClick={()=>this.props.add()}><i className="bi bi-play-fill"></i></a>
            </figure>
            <div className="card-body">
                <Link to={url_detalle}>
                    <h4 className="card-title" style={{display: "inline"}}>{this.props.songInfo.nombre}</h4>
                </Link>
                <p className="card-text" style={{fontSize: "1.6rem"}}>{this.props.songInfo.artista}</p>
            </div>
        </div>
        );
    }
}

export default CompSongs