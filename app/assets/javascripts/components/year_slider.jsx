var React = require('react');
var InputRange = require('react-input-range');

var dateNow = new Date();
var intYear = dateNow.getFullYear();


class YearSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        min: 1940,
        max: intYear,
      },
    };
  }

  handleValuesChange(component, values) {
    this.setState({
      values: values
    });
  }

  render() {
    return (
      <div id="range_year">
        <InputRange
          maxValue={intYear}
          minValue={1940}
          value={this.state.values}
          onChange={this.handleValuesChange.bind(this)} />
      </div>
    );
  }
}

module.exports = YearSlider