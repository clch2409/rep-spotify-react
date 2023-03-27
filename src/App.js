import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import PageSongDetails from './components/PageSongDetails';
// import PageSongDetailsCopy from './components/PageSongDetailsCopy';
import PageLanding from './components/PageLanding';
import PageToRenderList from './components/PageToRenderList';

class App extends Component{

  render(){
    return <div>
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            <Route exact path="/" Component={PageLanding}/>
            <Route exact path="/songList" Component={PageToRenderList}/>
            <Route exact path="/detalleCancion/:id" Component={PageSongDetails}/>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  }
}

export default App;
