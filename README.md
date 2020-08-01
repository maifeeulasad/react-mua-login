# react-mua-login

> Just another Login template for React.js

[![NPM](https://img.shields.io/npm/v/react-mua-login.svg)](https://www.npmjs.com/package/react-mua-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mua-login
```

## Usage

```jsx
import React, { Component } from 'react'


import Login from 'react-mua-login';
import 'react-mua-login/dist/index.css'

ReactDOM.render(
<Login onLogin={(username,password)=>{
  console.debug(username);
  console.debug(password);
}}/>, document.getElementById('root'))

```

# Sample : 

https://maifeeulasad.github.io/react-mua-login/
https://codesandbox.io/s/react-mua-login-sample-x12dr?file=/src/index.js

![react-mua-login](https://github.com/maifeeulasad/react-mua-login/blob/gh-pages/Screenshot.png)

## License

MIT © [maifeeulasad](https://github.com/maifeeulasad)
