import React from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router-dom';
export default function FeaturedImageDetails({ datas }) {
  console.log(datas);
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const data = page?.[id]?.imageId || [];

  return (
    <section className='container'>
      <div className='container-grid container-detail sm'>
        {data.map((item, index) => {
          return (
            <div
              key={`Featured-Image-${index}`}
              className={`item ${index > 0 ? 'column-5' : 'column-7'} ${
                index > 0 ? 'row-1' : 'row-2'
              }`}>
              <Fade
                bottom
                delay={300 * index}>
                <div className='card card-featured-img h-100'>
                  <figure className='img-wrapper featured-img'>
                    <img
                      src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                      alt={item._id}
                      className='img-cover'
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
