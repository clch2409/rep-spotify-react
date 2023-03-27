import { Component } from "react";
import CompGenres from "./CompGenres";
import CompSongs from "./CompSongs";
import dataGenres from "../json/dataGenres.json"


class PageListSongs extends Component{

    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <ul className="list-group" style={{width: "25rem"}}>
                            <CompGenres listaGeneros={dataGenres}/>
                        </ul>
                    </div>
                    <div class="col-9">
                    <div className="container">
                        <div className="row">
                            {this.props.listaCanciones.map(songs => <CompSongs songInfo={songs} key={songs.id} add={this.props.header}/>)}
                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default PageListSongs