import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from 'react-github-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <GitHubLogin clientId="5fc07bcee36ee142fc97"
  	redirectUri="" 
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);