var React = require('react');
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Button = require('react-bootstrap').Button;
var InputRange = require('react-input-range');
var CommonFunctions = require('./common_functions.js');
var YearSlider = require('./year_slider');
var RatingSlider = require('./rating_slider');

// objects and functions
var genres = CommonFunctions.genres;
var filters = CommonFunctions.filters;
var removeFilter = CommonFunctions.removeFilter;
var selectedFilters = CommonFunctions.selectedFilters;
var resetFilters = CommonFunctions.resetFilters;


var MovieForm = React.createClass({
  getInitialState: function() {
    return {filter: "All", genre: {checked: false}};
  },
  handleClick: function(e) {
    if (filters.includes("0")){
      removeFilter(filters, "0");
    }
    if (e.target.checked){
      filters.push(e.target.value)
    }else{
      removeFilter(filters, e.target.value);
    }
    this.setState({filter: selectedFilters(filters, genres), genre: genres[e.target.value]});
  },
  handleResetClick: function() {
    resetFilters();
    filters = ["0"];
    this.setState({filter: "All"});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var genre = filters.join(",");
    var minYear = $("#range_year .InputRange .InputRange-label").find("span")[1].textContent.trim();
    var maxYear = $("#range_year .InputRange .InputRange-label").find("span")[2].textContent.trim();
    var rating = $("#range_rating .InputRange-labelContainer")[1].textContent.trim();
    this.props.onSearchSubmit({
      genre: genre,
      minYear: minYear,
      maxYear: maxYear,
      rating: rating});
  },
  render: function(){
    return (
      <form className="movieForm" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Grid className="genre">
            <Row>
              <Col md={1}>
                <h3 className="text">Genre</h3>
              </Col>
              <Col md={11}>
                <Panel header={this.state.filter}>
                  <Grid>
                    <Row>
                      <Col>
                        <Button bsStyle="link" onClick={this.handleResetClick}>Reset</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="28"
                          label="Action" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="12"
                          label="Adventure" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="16"
                          label="Animation" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="35"
                          label="Comedy" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="80"
                          label="Crime" />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="99"
                          label="Documentary" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="18"
                          label="Drama" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="10751"
                          label="Family" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="14"
                          label="Fantasy" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="10769"
                          label="Foreign" />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="36"
                          label="History" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="27"
                          label="Horror" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="10402"
                          label="Music" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="9648"
                          label="Mystery" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="10749"
                          label="Romance" />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="878"
                          label="Science Fiction" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="10770"
                          label="TV Movie" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="53"
                          label="Thriller" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="10752"
                          label="War" />
                      </Col>
                      <Col md={2}>
                        <Input type="checkbox"
                          checked={this.state.genre.checked}
                          onClick={this.handleClick}
                          value="37"
                          label="Western" />
                      </Col>
                    </Row>
                  </Grid>
                </Panel>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <h3 className="text">Year</h3>
              </Col>
              <Col md={2}>
                 <YearSlider/>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <h3 className="text">Rating</h3>
              </Col>
              <Col md={2}>
                <RatingSlider/>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <input type="submit" value="Search" />
              </Col>
            </Row>
          </Grid>
        </FormGroup>
      </form>
    );

  }
});

module.exports = MovieForm;