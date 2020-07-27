import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from "jquery";

class SearchForm extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        $("#uploadTrigger").click(function(){
            $("#uploadFile").click();
         });
    }

    render(){
        return(
            <>
            <div className="container"> 
            <form className="form-inline searchForm">
            <div className="input-group uploadGroup">
                <input type="text" className="form-control searchBar" placeholder="Type Your Search here"  />
                <div className="input-group-append" id="button-addon4">
                    <input type="file" class="hidden" id="uploadFile"/>
                    <div class="button" id="uploadTrigger"><img src="upload.png" className="upload"/></div>
                    <button className="btn btn-outline-secondary btn-dark searchButton" type="button">Search</button>
                </div>
            </div>
            </form>
            </div>
            
            </>
        )
    }
}

export default SearchForm;