import { InputText } from 'elements/Form';
import React from 'react';
import Fade from 'react-reveal/Fade';
export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  return (
    <Fade>
      <div
        className='container booking-information'
        style={{ marginBottom: 30 }}
      >
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 one-booking col-lg-5 border-right py-3'>
            <Fade delay={300}>
              <div className='card'>
                <figure className='img-wrapper'>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                    className='img-cover'
                  />
                </figure>
                <div className='row align-items-center'>
                  <div className='col'>
                    <div className='meta-wrapper'>
                      <h5>{ItemDetails.title}</h5>
                      <span className='text-gray-50'>
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className='col-auto'>
                    <span>${+checkout.duration * ItemDetails.price} USD</span>
                    <span className='text-gray-500'> / </span>
                    {checkout.duration} {ItemDetails.unit}
                    {checkout.duration > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 two-booking col-lg-5 py-3'>
            <Fade delay={600}>
              <label htmlFor='firstName'>First Name</label>
              <InputText
                id='firstName'
                name='firstName'
                value={data.firstName}
                onChange={props.onChange}
              />
              <label htmlFor='lastName'>Last Name</label>
              <InputText
                id='lastName'
                name='lastName'
                value={data.lastName}
                onChange={props.onChange}
              />
              <label htmlFor='email'>Email Address</label>
              <InputText
                id='email'
                name='email'
                type='email'
                value={data.email}
                onChange={props.onChange}
              />
              <label htmlFor='phone'>Phone Number</label>
              <InputText
                id='phone'
                name='phone'
                type='tel'
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
