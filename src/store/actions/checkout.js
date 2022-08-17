import { CHECKOUT_BOOKING } from '../types';

export const checkoutBooking = (payload) => (dispath) => {
  dispath({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};
