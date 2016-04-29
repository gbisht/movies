var React = require('react');
var ReactDOM = require('react-dom');
var MovieForm = require('./form');
var Movie = require('./movie');

var Movies = React.createClass({
  getInitialState: function() {
    return {data: {title: '', poster: ''}};
  },
  handleSearchSubmit: function(query) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      data: query,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="movies">
        <MovieForm onSearchSubmit={this.handleSearchSubmit} />
        <Movie data={this.state.data}/>
      </div>
    );
  }
});

module.exports = Movies;