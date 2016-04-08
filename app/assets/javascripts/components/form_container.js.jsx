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
        debugger;
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        debugger;
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