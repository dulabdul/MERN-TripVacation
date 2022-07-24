import { InputNumber, InputDate } from "elements/Form";
import propTypes from "prop-types";
import React from "react";

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }
    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endData = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data.date,
          endData: endData,
        },
      });
    }
  }
  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;
    return (
      <div className="card bordered">
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="text-gray-900 mb-4">
          ${itemDetails.price}{" "}
          <span className="text gray-500 fw-light">/ ${itemDetails.unit}</span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPrural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
        <label htmlFor="Pick Date">Pick date?</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
