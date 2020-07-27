import React from 'react';
import NavBar from './NavBar.js';
import TextForm from './TextForm.js';
import FacialSteps from './FacialSteps.js';


class TextSearch extends React.Component{
    render(){
        return(
            <div className="container-fluid mynavbar">
            <div className="row">
                <div className="container">
                    <NavBar />
                    <TextForm />
                    <FacialSteps />
                </div>
            </div>
        </div>
            
        )
    }
}

export default TextSearch;