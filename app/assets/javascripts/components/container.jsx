var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
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
        <Grid>
          <Row>
            <Col md={12}>
              <MovieForm onSearchSubmit={this.handleSearchSubmit} />
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Movie data={this.state.data}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Movies;