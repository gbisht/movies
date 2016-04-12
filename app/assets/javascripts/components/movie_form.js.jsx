var MovieForm = React.createClass({
  getInitialState: function() {
    return {filter: "All", genre: {checked: false}};
  },
  handleClick: function(e) {
    if (filters.includes("0")){
      removeFilter("0");
    }
    if (e.target.checked){
      filters.push(e.target.value)
    }else{
      removeFilter(e.target.value);
    }
    this.setState({filter: selectedFilters(), genre: Genres[e.target.value]});
  },
  handleResetClick: function() {
    resetFilters();
    filters = ["0"];
    this.setState({filter: "All"});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var genre = filters.join(",");
    var year = $("#range_year span").text().trim();
    var rating = $("#range_rating span").text().trim();
    if (!genre && !year && !rating){
      return;
    }
    this.props.onSearchSubmit({genre: genre, year: year, rating: rating});
  },
  render: function(){
    return (
      <form className="movieForm" onSubmit={this.handleSubmit}>
        <Grid className="genre">
          <Row>
            <Col sm={6} md={1}>
              <h3 className="text">Genre</h3>
            </Col>
            <Col sm={6} md={10}>
              <Panel header={this.state.filter}>
                <Grid>
                  <Row>
                    <Col sm={1}>
                      <Button bsStyle="link" onClick={this.handleResetClick}>Reset</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="28"
                        label="Action" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="12"
                        label="Adventure" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="16"
                        label="Animation" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="35"
                        label="Comedy" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="80"
                        label="Crime" />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="99"
                        label="Documentary" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="18"
                        label="Drama" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="10751"
                        label="Family" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="14"
                        label="Fantasy" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="10769"
                        label="Foreign" />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="36"
                        label="History" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="27"
                        label="Horror" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="10402"
                        label="Music" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="9648"
                        label="Mystery" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="10749"
                        label="Romance" />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="878"
                        label="Science Fiction" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="10770"
                        label="TV Movie" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="53"
                        label="Thriller" />
                    </Col>
                    <Col sm={2}>
                      <Input type="checkbox"
                        checked={this.state.genre.checked}
                        onClick={this.handleClick}
                        value="10752"
                        label="War" />
                    </Col>
                    <Col sm={2}>
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
            <Col sm={6} md={1}>
              <h3 className="text">Year</h3>
            </Col>
            <Col sm={6} md={2}>
               <YearSlider/>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={1}>
              <h3 className="text">Rating</h3>
            </Col>
            <Col sm={6} md={2}>
              <RatingSlider/>
            </Col>
          </Row>
          <Row>
            <Col sm={1}>
              <input type="submit" value="Search" />
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
});

var YearSlider = React.createClass({
  getInitialState: function(){
    return {year: "1930"};
  },
  handleOnChange: function(event){
    this.setState({year: event.target.value});
  },
  render: function(){
    return (
      <div id="range_year">
        <input
          type="range"
          min={1930}
          max={2016}
          step={1}
          value={this.state.year}
          onChange={this.handleOnChange}/>
          <span>{this.state.year}</span>
      </div>
    );
  }
});

var RatingSlider = React.createClass({
  getInitialState: function(){
    return {rating: 1};
  },
  handleOnChange: function(event){
    this.setState({rating: event.target.value});
  },
  render: function(){
    return (
      <div id="range_rating">
      <input
        type="range"
        min={1}
        max={10}
        step={1}
        value={this.state.rating}
        onChange={this.handleOnChange}/>
        <span>{this.state.rating}</span>
      </div>
    );
  }
});
