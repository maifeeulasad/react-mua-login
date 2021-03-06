import React from 'react'
import style from './styles.module.css'
import defaultIcon from './login.svg'

/*
    Original SASS by Marco Biedermann - https://codepen.io/marcobiedermann/pen/wKNGzo
    Default icon source - https://www.flaticon.com/free-icon/login_152533
 */

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.changeValue = this.changeValue.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  changeValue(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onLogin(e) {
    e.preventDefault()
    if (this.state.email === '' || this.state.password === '') return
    this.props.onLogin(this.state.email, this.state.password)
  }

  render() {
    return (
      <div>
        <div className={style.align}>
          <div className={style.grid + ' ' + style.align__item}>
            <div className={style.register}>
              <img
                src={
                  this.props.icon === undefined ? defaultIcon : this.props.icon
                }
                height={80}
                width={80}
                alt='Login'
              />
              <h2>Login</h2>
              <h4>{this.props.motto}</h4>
              <form className={style.form}>
                <div className={style.form__field}>
                  <input
                    required
                    onChange={this.changeValue}
                    name='email'
                    type='email'
                    autoComplete='username'
                    placeholder='Please enter your email here'
                  />
                </div>
                <div className={style.form__field}>
                  <input
                    required
                    onChange={this.changeValue}
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    placeholder='Please enter your password here'
                  />
                </div>
                <div className={style.form__field}>
                  <input type='submit' onClick={this.onLogin} value='Login' />
                </div>
              </form>
              <p>
                Don't have an account?
                <a
                  href={
                    this.props.signupLink !== undefined
                      ? this.props.signupLink
                      : '/signup'
                  }
                >
                  {' '}
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
