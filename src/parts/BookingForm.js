import Button from 'elements/button';
import { withRouter } from 'react-router-dom';

import { InputNumber, InputDate } from 'elements/Form';
import propTypes from 'prop-types';
import React from 'react';
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
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
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push('/checkout');
  };
  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;
    return (
      <div className='card bordered' style={{ padding: 70 }}>
        <h4 className='mb-3'>Start Booking</h4>
        <h5 className='text-gray-900 mb-4'>
          ${itemDetails.price}{' '}
          <span className='text gray-500 fw-light text-capitalize'>
            / {itemDetails.unit}
          </span>
        </h5>

        <label
          htmlFor='duration'
          className='text-gray-500'
          style={{ marginBottom: 10 }}
        >
          How long you will stay?
        </label>
        <InputNumber
          max={30}
          suffix={' night'}
          isSuffixPrural
          onChange={this.updateData}
          name='duration'
          value={data.duration}
        />
        <label
          htmlFor='Pick Date'
          style={{ marginBottom: 10 }}
          className='text-gray-500'
        >
          Pick date?
        </label>
        <InputDate onChange={this.updateData} name='date' value={data.date} />
        <h6 className='text-gray-500' style={{ marginBottom: 40 }}>
          You will pay{' '}
          <span className='text-gray-900'>
            ${itemDetails.price * data.duration} USD
          </span>{' '}
          <span className='text-gray-900'>
            / {data.duration} {itemDetails.unit}
            {data.duration > 1 ? 's' : ''}
          </span>
        </h6>
        <Button
          className='btn px-5 mb-2 text-center '
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
export default withRouter(BookingForm);
