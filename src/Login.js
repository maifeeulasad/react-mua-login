import React from 'react';
import defaultIcon from './login.svg';
import "./login.css";

/*
    Original SASS by Marco Biedermann - https://codepen.io/marcobiedermann/pen/wKNGzo
    Default icon source - https://www.flaticon.com/free-icon/login_152533
 */

class Login extends React.Component {

    state = {
        email: "",
        password: ""
    };

    changeValue = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    login = (e) => {
        e.preventDefault();
        if (this.state.email === "" || this.state.password === "")
            return;
        this.props.login(this.state.email, this.state.password);
    };

    render() {
        return (
            <div>
                <div className="align">
                    <div className="grid align__item">
                        <div className="register">
                            <img src={this.props.icon === undefined ? defaultIcon : this.props.icon} height={80}
                                 width={80} alt={"Login"}/>
                            <h2>Login</h2>
                            <h4>{this.props.motto}</h4>
                            <form className="form">
                                <div className="form__field">
                                    <input required onChange={this.changeValue} name={"email"}
                                           type={"email"} autoComplete={"username"}
                                           placeholder="Please enter your email here"/>
                                </div>
                                <div className="form__field">
                                    <input required onChange={this.changeValue} name={"password"} type="password"
                                           autoComplete={"current-password"}
                                           placeholder="Please enter your password here"/>
                                </div>
                                <div className="form__field">
                                    <input type={"submit"} onClick={this.login} value={"Login"}/>
                                </div>
                            </form>
                            <p>Don't have an account?
                                <a href=
                                       {this.props.signupLink !== undefined
                                           ? this.props.signupLink
                                           : "/signup"}> Signup
                                </a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;
