# react-mua-login

Why wasting your time designing and writing the same code for 
every project again and again. Just forget about all these hassles,
 and concentrate on your original purpose.
 
All you have to do is 
```
npm install react-mua-login
```

And call it simply like this :
```typescript jsx

import Login from "react-mua-login";
...
<Login
      login={(username, password) => {
        console.debug(username);
        console.debug(password);
      }}
    />
```
Now you are good to go.

Live example : 
[codesandbox.io](https://codesandbox.io/s/react-mua-login-sample-x12dr?file=/src/index.js)


To-Do :
Complete documentation
