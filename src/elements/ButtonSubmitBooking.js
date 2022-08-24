import React from 'react';
import { useDispatch } from 'react-redux';
import { checkoutBooking } from 'store/actions/checkout';
import Button from 'elements/button';
import { useNavigate } from 'react-router-dom';
function ButtonSubmitBooking({ data, itemDetails }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function fnsstartBooking() {
    dispatch(
      checkoutBooking({
        _id: itemDetails._id,
        duration: data.duration,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate,
        },
      })
    );
    navigate('/checkout');
  }
  return (
    <Button
      className='btn px-5 mb-2 text-center '
      hasShadow
      isPrimary
      isBlock
      onClick={fnsstartBooking}
    >
      Continue to Book
    </Button>
  );
}

export default ButtonSubmitBooking;
