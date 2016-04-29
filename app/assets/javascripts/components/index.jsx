var React = require('react');
var ReactDOM = require('react-dom');
var Movies = require('./container');

$(document).on("page:change", function() {
  ReactDOM.render(
    <Movies url="movies.json"/>,
    document.getElementById('content')
  );
})