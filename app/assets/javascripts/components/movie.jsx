var React = require('react');

var Movie = React.createClass({
  render: function(){
    return (
      <div className="movie">
        <h2>{this.props.data.title}</h2>
        <img src={this.props.data.poster_path} />
      </div>
    );
  }
});

module.exports = Movie;