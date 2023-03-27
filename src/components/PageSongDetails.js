import { useParams } from "react-router-dom";
import CompSongDescription from './CompSongDescription'
import dataSongs from '../json/dataSongs.json'


const PageSongDetails = () =>{
    let {id} = useParams();

    return (
        <div>
            <CompSongDescription params={id} listaCancion={dataSongs}/>
        </div>
    );
}
export default PageSongDetails