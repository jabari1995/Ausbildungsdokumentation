import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.value ? props.value : "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  isWeekday = (date) => {
    const day = date.getDay();
    return day === 1;
  };

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    this.props.callback(date);
  }
  render() {
    return (
      <DatePicker
        placeholderText="Click to select a date"
        disabled={this.props.dateDisabled}
        filterDate={this.isWeekday}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
export default Test;
