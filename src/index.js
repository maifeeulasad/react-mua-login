import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Login";
import testIcon from './test.svg';

ReactDOM.render(
  <React.StrictMode>
      <Login
          /*icon = {testIcon}*/
          /*signupLink={"/signup/test"}*/
          /*motto={"You've done half of the job by joining, now just do the rest"}*/
             login={(blabla,password)=>{
                 console.debug(blabla);
                 console.debug(password);
             }}/>
  </React.StrictMode>,
  document.getElementById('root')
);
