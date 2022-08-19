/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { FETCH_PAGE } from 'store/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
