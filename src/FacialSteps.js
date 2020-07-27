import React from 'react';

class FacialSteps extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="card col-sm-3">
                        <img src="./file.png" className="card-img-top facialIntro" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Upload Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-sm-3">
                        <img src="./seo.png" className="card-img-top facialIntro" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Search Our Database</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-sm-3">
                        <img src="result.png" className="card-img-top facialIntro" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Find Results</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FacialSteps;