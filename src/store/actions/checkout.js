import axios from 'configs/axios';
import { CHECKOUT_BOOKING } from '../types';

export const checkoutBooking = (payload) => (dispath) => {
  dispath({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};
export const submitBooking = (payload) => () => {
  return axios.post(`/booking-page`, payload, {
    headers: {
      contentType: 'multipart/form-data',
    },
  });
};
