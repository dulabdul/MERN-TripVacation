import Header from 'parts/Header';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/button';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from 'elements/Stepper';
import { connect } from 'react-redux';
import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';
import { submitBooking } from 'store/actions/checkout';
class CheckoutPage extends React.Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  };
  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };
  componentDidMount() {
    window.scroll(0, 0);
  }
  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append('itemId', checkout._id);
    payload.append('duration', checkout.duration);
    payload.append('bookingStartDate', checkout.date.startDate);
    payload.append('bookingEndDate', checkout.date.endDate);
    payload.append('firstName', data.firstName);
    payload.append('lastName', data.lastName);
    payload.append('email', data.email);
    payload.append('phoneNumber', data.phone);
    payload.append('bankFrom', data.bankName);
    payload.append('accountHolder', data.bankHolder);
    payload.append('image', data.proofPayment[0]);
    // payload.append('bankId', data.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };
  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;
    console.log(page, data);
    if (!checkout)
      return (
        <div className='container'>
          <div
            className='row align-items-center justify-content-center text-center'
            style={{ height: '100vh' }}
          >
            <div className='col-3'>
              Choose Room Please !
              <div>
                <Button
                  className='btn mt-5'
                  type='button'
                  onClick={() => window.history.back()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instruction bellow',
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === 'bookingInformation' && (
                <Fade>
                  <Controller>
                    {data.firstName !== '' &&
                      data.lastName !== '' &&
                      data.email !== '' &&
                      data.phone !== '' && (
                        <Fade>
                          <Button
                            className='btn mb-3 px-5'
                            type='button'
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue to Book
                          </Button>
                        </Fade>
                      )}
                    <Button
                      className='btn'
                      type='link'
                      isBlock
                      isLight
                      href={`/properties/${[checkout._id]}`}
                    >
                      Cancel
                    </Button>
                  </Controller>
                </Fade>
              )}
              {CurrentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' &&
                    data.bankName !== '' &&
                    data.bankHolder !== '' && (
                      <Fade>
                        <Button
                          className='btn px-5 mb-3'
                          type='button'
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className='btn px-5'
                    type='button'
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === 'completed' && (
                <Controller>
                  <Button
                    className='btn'
                    type='link'
                    isBlock
                    isPrimary
                    hasShadow
                    href='/'
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});
export default connect(mapStateToProps, { submitBooking })(CheckoutPage);
