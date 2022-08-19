import { FETCH_PAGE } from 'store/types';
import axios from 'configs/axios';
export const fetchPage = (url, page) => (dispatch) => {
  // const config = {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   },
  // };
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
  });
};
