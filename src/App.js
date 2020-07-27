import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home.js';
import FacialRecognition from './FacialRecognition.js';
import TextSearch from './TextSearch.js';
import AnimalRecognition from './AnimalRecognition.js';
import UploadContent from './UploadContent.js';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <React.Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/facialRecognition" component={FacialRecognition} />
                <Route path="/textSearch" component={TextSearch} />
                <Route path="/animalRecognition" component={AnimalRecognition} />
                <Route path="/uploadContent" component={UploadContent} />
              </Switch>
          </React.Fragment>
        </BrowserRouter>
  );
}

export default App;
