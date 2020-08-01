import React from 'react'
import ReactDOM from 'react-dom'
import Login from 'react-mua-login';
import 'react-mua-login/dist/index.css'

ReactDOM.render(
  <Login onLogin={(username, password) => {
    console.debug(username)
    console.debug(password)
  }}/>, document.getElementById('root'))
