import React from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PagesDetailDescription() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const data = page?.[id] || {};
  console.log(data);
  return (
    <section className='detail-description'>
      <h3 className='h4'>About the place</h3>
      {data?.description ? parse(data?.description) : ''}

      <div
        className='row'
        style={{ marginTop: 30 }}>
        {data?.featuredId?.length === 0
          ? 'Not Found Featured'
          : data?.featuredId?.map((feature, index) => {
              return (
                <div
                  className='col-3 text-center'
                  key={`feature-${index}`}
                  style={{ marginBottom: 20 }}>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                    className='d-block mb-2 '
                    width='38'
                    height='38'
                  />{' '}
                  <span>{feature.qty}</span>{' '}
                  <span className='text-gray-500 fw-light'>{feature.name}</span>
                </div>
              );
            })}
      </div>
    </section>
  );
}
