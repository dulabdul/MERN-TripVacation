import Button from 'elements/button';
import React from 'react';
import Fade from 'react-reveal/Fade';
export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section
        className='container container-category'
        key={`Categories-${index1}`}
      >
        <Fade bottom>
          <h4 className='mb-3 fw-medium'>{category.name}</h4>
          <div className='container-grid'>
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className='item column-3 row-1'
                  key={`Category-${index1}-items-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className='card card-categories'>
                      {item.isPopular && (
                        <div className='tag'>
                          Popular <span className='fw-light'>Choice</span>
                        </div>
                      )}
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
                          className='stretched-link d-block'
                          href={`/properties/${item._id}`}
                        >
                          <h5 className='text-gray-900'>{item.title}</h5>
                        </Button>
                        <span className='text-gray-500'>
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
  });
}
