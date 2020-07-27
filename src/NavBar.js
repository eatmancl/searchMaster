import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light customNavbar">
            <a class="navbar-brand" href="#">I/V ENGINE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link className="nav-item nav-link" to={'/'}>Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                <Link className="nav-item nav-link" to={'/facialRecognition'}>Facial Recognition</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-item nav-link" to={'/textSearch'}>Text Search</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-item nav-link" to={'/animalRecognition'}>Animal Recognition</Link>
                </li>
              </ul>
              <span class="navbar-text">
              <Link className="nav-item nav-link" to={'/uploadContent'}><button type="button" class="btn btn-success">UPLOAD</button></Link>
              </span>
            </div>
          </nav>
        )
    }
}

export default NavBar;