import React from 'react';

class TextForm extends React.Component{
    render(){
        return(
            <>
            <div className="container textSearch"> 
            <h1 className="centerText">Start your search here</h1>
            <form className="form-inline searchForm">
            <div className="input-group uploadGroup">
                <input type="text" className="form-control searchBar" placeholder="Type Your Search here"  />
                <div className="input-group-append" id="button-addon4">
                    <button className="btn btn-outline-secondary btn-dark searchButton" type="button">Search</button>
                </div>
            </div>
            </form>
            </div>
            
            </>
        );
    }
}

export default TextForm;