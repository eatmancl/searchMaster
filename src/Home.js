import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchForm from './SearchForm.js';
import Results from './Results.js';
import NavBar from './NavBar.js';
import Intro from './Intro.js';
import Features from './Features.js';

class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container-fluid mynavbar">
                <div className="row">
                    <div className="container">
                        <div className="navBarContainer">
                            <NavBar />
                        </div>
                        <div className="introContainer">
                            <Intro />
                        </div>
                        <div className="featuresContainer">
                            <Features />
                        </div>
                        
                    </div>
                </div>
            </div>
                
            
        )
    }
}

export default Home;