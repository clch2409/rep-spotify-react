import { Component } from "react";
import CompHeader from "./CompHeader";
import PageListSongs from "./PageListSongs";
import dataSongs from '../json/dataSongs.json';



class PageToRenderList extends Component{
    constructor(){
        super();
        this.state = {
            contador: 0
        }
    };

    agregarReproduccion = () => {
        this.setState(prevState => ({
            contador: prevState.contador + 1
        }))
    };


    render(){
        return (
            <div>
                <CompHeader cont={this.state.contador.valueOf()}/>
                <PageListSongs listaCanciones={dataSongs} header={this.agregarReproduccion}/>
            </div>
        );
    }
}

export default PageToRenderList