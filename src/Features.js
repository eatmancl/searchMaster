import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component{
    render(){
        return(
            <div className="container landingPage">
                <div className="row">
                    <div className="card col-sm-3 services">
                        <div className="card-body">
                        <Link className="nav-item nav-link myLink" to={'/facialRecognition'}><h5 className="card-title">Facial Recognition</h5></Link>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-sm-3 services">
                        <div className="card-body">
                        <Link className="nav-item nav-link myLink" to={'/textSearch'}><h5 className="card-title">Dialogue Search</h5></Link>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-sm-3 services">
                        <div className="card-body">
                        <Link className="nav-item nav-link myLink" to={'/animalRecognition'}><h5 className="card-title">Nature Preservation</h5></Link>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;