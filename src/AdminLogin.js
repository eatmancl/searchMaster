import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginForm.css';
import { Redirect } from 'react-router-dom';


class AdminLogin extends React.Component{
    constructor(){
        super();
        this.state = {
          userName: "",
          passWord:"",
          userflag:false,
          passflag:false,
          errormss:"",
          redirect: false

        };
    }
    changeValue = (event) => {
        const fieldName = event.target.name
        switch (fieldName) {
          case "Username":
            this.setState({ userName: event.target.value })
            this.validateUsername(event.target.value);
            break;
          case "Password":
            this.setState({ passWord: event.target.value })
            this.validatePassword(event.target.value);

            break;
        }
      }
      validateUsername = (value) => {

        if (value != "team") {
          this.setState({ userflag: false });
          console.log(this.state.userflag);
        }
        else {
          this.setState({ userflag: true })
          console.log(this.state.userflag);
        }

      }
      validatePassword = (value) => {

        if (value === "win!") {
          this.setState({ passflag: true })
          console.log(this.state.passflag);
        }
        else {
          this.setState({ passflag: false })
          console.log(this.state.passflag);
        }

      }
      login=()=>{


        if(this.state.passflag && this.state.userflag){
          this.setState({ errormss: "" })
          this.setState({redirect: true})
        }else{
          this.setState({ errormss: "Invalid Login " })
        }

      }
      renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/adminHome' />
    }
  }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="card col-8 offset-2">

                        <div className="wrapper fadeInDown">
                        <div id="formContent">
                        <h1>Admin Login </h1>
                        <input type="text" id="login" className="fadeIn second" value={this.state.userName} onChange={this.changeValue} name="Username" placeholder="login"/>
                        <input type="text" id="password" className="fadeIn third" value={this.state.passWord} onChange={this.changeValue} name="Password" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.login}/>
                        <span className="text-danger">{this.state.errormss}</span>
                        {this.renderRedirect()}

                        </div>
                        </div>
                </div>
                </div>
                </div>



        )
    }
}

export default AdminLogin;
