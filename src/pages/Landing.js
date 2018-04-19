import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  loginUser
} from '../modules/signin';
import GitHubLogin from 'react-github-login';


class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailErr: false,
      passwordErr: false
    };
  }


  // change(e) {
  //   this.setState({[e.target.name]: e.target.value});
  // }


  attemptRegister() {

    console.log("this.state", this.state);
    const err = {emailErr: false, passwordErr: false};

    const email = this.refs.email.value;
    const password = this.refs.password.value;
    //console.log("email and password of refs value", email, password);

    if (email.length === 0) {
      err.emailErr = true;
    }

    if (password.length === 0) {
      err.passwordErr = true;
    }

    if (err.emailErr || err.passwordErr) {
      this.setState(err);
    } else {
      this.props.dispatch(loginUser({email, password}));
    }
  }

  
  render() {
    console.log("hdfksdjfklds", this.state);
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

    return (
      <div>
        <div className="mt5 pt5">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" name="email" ref={'email'}/>
                  { this.state.emailErr ? 
                    <div className="pa2 red">Email is not valid</div> 
                    : null }
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" name="password" ref={'password'}/>
                  { this.state.passwordErr ? 
                    <div className="pa2 red">Password is not valid</div>
                    : null }
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                onClick={() => this.attemptRegister()} type="submit" value="Sign Up"/>
            </div>
            <div className="lh-copy mt3">
              <div className="" style={{marginLeft: '-8px'}}>
                <GitHubLogin clientId="5fc07bcee36ee142fc97"
                  redirectUri="" 
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  className="b--transparent b bg-transparent pointer f6 dim black"
                />
              </div>  
              <a href="#0" className="f6 link dim black pointer db">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  //console.log("isLoggedIn-state-check", state.isLoggedIn);
  return {
  }
}

export default connect(mapStateToProps)(Landing);