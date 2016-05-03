var React = require('react');
var InputRange = require('react-input-range');

class RatingSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }

  handleValueChange(component, value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div id="range_rating">
        <InputRange
          maxValue={10}
          minValue={1}
          value={this.state.value}
          onChange={this.handleValueChange.bind(this)} />
      </div>
    );
  }
}

module.exports = RatingSlider;