import Button from 'elements/button';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Activities() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const data = page?.[id] || {};
  console.log('activity', data);
  if (data?.length === 0) return null;
  return (
    <section className='container container-activity'>
      <Fade bottom>
        <h4 className='mb-3 fw-medium'>Activities</h4>
        <div className='container-grid'>
          {data?.activityId?.map((item, index2) => {
            return (
              <div
                className='item column-3 row-1'
                key={`Category-items-${index2}`}>
                <Fade
                  bottom
                  delay={300 * index2}>
                  <div className='card card-categories'>
                    {item.isPopular && (
                      <div className='tag'>
                        Popular <span className='fw-light'>Choice</span>
                      </div>
                    )}
                    <figure className='img-wrapper'>
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ''
                        }
                        alt={item.title}
                        className='img-cover'
                      />
                    </figure>
                    <div className='meta-wrapper'>
                      <Button
                        type='link'
                        className='stretched-link d-block'
                        href={`/properties/${item._id}`}>
                        <h5 className='text-gray-900'>{item.name}</h5>
                      </Button>
                      <span className='text-gray-500'>{item.type}</span>
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
