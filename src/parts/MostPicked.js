import Button from 'elements/button';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { useAxios } from 'use-axios-client';

export default function MostPicked({ mostPickedRef }) {
  const [mostPickedData, setMostPickedData] = useState(null);
  const { data, error, isLoading } = useAxios({
    url: `${process.env.REACT_APP_HOST}/api/v1/member/most-picked`,
  });
  useEffect(() => {
    setMostPickedData(data?.mostPicked);
  }, [data]);

  return (
    <section
      ref={mostPickedRef}
      className='container container-mostpicked'>
      <Fade bottom>
        <h4 className='mb-1'>Most Picked</h4>
        <div className='container-grid'>
          {mostPickedData?.map((item, index) => {
            return (
              <div
                key={`mostpicked ${index}`}
                className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}>
                <Fade
                  bottom
                  delay={500 * index}>
                  <div className='card card-featured'>
                    <div className='tag'>
                      ${item.price}
                      <span className='fw-light'>/ {item.unit}</span>
                    </div>
                    <figure className='img-wrapper'>
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                            : ''
                        }
                        alt={item.title}
                        className='img-cover'
                      />
                    </figure>
                    <div className='meta-wrapper'>
                      <Button
                        type='link'
                        className='stretched-link d-block text-white'
                        href={`/properties/${item._id}`}>
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
