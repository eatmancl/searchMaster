import React from 'react';
import $ from "jquery";
import axios from 'axios';


class UploadForm extends React.Component{
    constructor(){
        super();
        this.state = {
            clicked: false,
            selectedFile: null
        };
    }

    componentDidMount(){
        $("#uploadTrigger").click(function(){
            $("#uploadFile").click();
         });
    }

    searchImage = (event) =>{
        const value = this.state.clicked;
        this.setState({
            clicked: !value
        });

        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post("")
        .then( res => {
            console.log(res);
        });

    }

    fileChanged = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    render(){
        if(this.state.clicked){
            return(
                
                <div className="container uploadContainer">
                    <h1 className="centerText">Results</h1>
                    <div className="row">
                        <div className="resultRow">
                            <div className="col-md-2 imageColumn">
                                <img src="./upload.png" className="uploadedImage"></img>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <hr size="1" color="#000" width="100%" />
                                <button className="btn btn-primary tryAgain" onClick={this.searchImage}>Try Again !</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="container uploadContainer">
                    <h1 className="centerText">Start your search here</h1>
                    <div className="container">
                    <div className="row">
                        <div className="container fileUpload">
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-2 imageFile">
                                <form >
                                    <div className="input-group-append" id="button-addon4">
                                        <input type="file" className="hidden" id="uploadFile" onChange={this.fileChanged}/>
                                        <div className="button" id="uploadTrigger"><img src="fileUpload.png" className="upload uploadForm"/></div>
                                    </div>
                                </form>
                                </div>
                                <div className="col-sm-5">
                                        <h4>Please Upload Your Image here.</h4>
                                        <p>We will search our database based on that image.</p>
                                        <button className="btn btn-primary" onClick={this.searchImage}>Search</button>
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            )
        }
    }
}

export default UploadForm;