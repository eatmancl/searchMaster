import React from 'react';
import NavBar from './NavBar.js';
import UploadForm from './UploadForm.js';
import FacialSteps from './FacialSteps.js';

class AnimalRecognition extends React.Component{
    render(){
        return(
            <div className="container-fluid mynavbar">
                <div className="row">
                    <div className="container">
                        <NavBar />
                        <UploadForm />
                        <FacialSteps />
                    </div>
                </div>
            </div>
        )
    }
}

export default AnimalRecognition;