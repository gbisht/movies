var MovieForm = React.createClass({
  getInitialState: function() {
    return {filter: "All", genre: {checked: false}, year: '', rating: ''};
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
  handleYearChange: function(event) {
    this.setState({year: event.target.value});
  },
  handleRatingChange: function(event){
    this.setState({rating: event.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var genre = filters.join(",");
    var year = this.state.year.trim();
    var rating = this.state.rating.trim();
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
              <input
                type="text"
                value={this.state.year}
                onChange={this.handleYearChange}/>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={1}>
              <h3 className="text">Rating</h3>
            </Col>
            <Col sm={6} md={2}>
              <input
                type="text"
                value={this.state.rating}
                onChange={this.handleRatingChange}/>
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