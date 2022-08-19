import React from 'react';
import Star from 'elements/Star';
import TestimoniFrame from 'assets/images/img-testi-home-frame.jpg';
import Button from 'elements/button';
import Fade from 'react-reveal/Fade';
export default function Testimoni({ data }) {
  return (
    <Fade bottom>
      <section className='container'>
        <div className='row align-items-center'>
          <div className='col-auto' style={{ marginRight: 70 }}>
            <div className='testi-hero' style={{ margin: `30 0 0 30px` }}>
              <img
                src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
                alt={data.name}
                className='position-absolute'
                style={{ zIndex: 2 }}
              />
              <img
                src={TestimoniFrame}
                alt={data.name}
                className='position-absolute'
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              />
            </div>
          </div>
          <div className='col-6'>
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={34} height={35} spacing={4}></Star>
            <h5 className='h2 fw-light my-3'>{data.content}</h5>
            <span className='text-gray-500'>
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className='btn px-5'
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                isWidthAuto
                type='link'
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
