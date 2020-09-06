  
import React, { Component } from 'react';

 import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
           // hasAgreed: false
        };

   

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'button' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('submission of form');
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h3>create your account</h3>
            
                
               <div className="FormCenter">
            <GoogleLogin
                            clientId="979679647314-vki5gqqks6frobck7ooerb7d6l1vi5a6.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            mcookiePolicy={'single_host_origin'}
                              
            />



        
       <div className="fb">
       <FacebookLogin
       appId="1399826666879514"
       autoLoad={true}
       fields="name.email.picture"
       onClick={this.componentClicked}
       callback={this.responseFacebook}
       /></div>
     

       


            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">First Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Last Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
             
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
             
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                  <button className="FormField-Button">Sign Up</button> 
              </div>
            </form>
          </div>
          </div>
        );
    }
}

export default SignUpForm;