import React, { useEffect, useState } from 'react';
import Star from 'elements/Star';
import TestimoniFrame from 'assets/images/img-testi-home-frame.jpg';
import Button from 'elements/button';
import Fade from 'react-reveal/Fade';
import { useAxios } from 'use-axios-client';

export default function Testimoni() {
  const [testiData, setTestiData] = useState(null);
  const { data, error, isLoading } = useAxios({
    url: `${process.env.REACT_APP_HOST}/api/v1/member/testimonial-page`,
  });
  useEffect(() => {
    setTestiData(data?.testimonial);
  }, [data]);
  return (
    <Fade bottom>
      <section className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-auto testi-img-container'>
            <div
              className='testi-hero'
              style={{ margin: `30 0 0 30px` }}>
              <img
                src={`${process.env.REACT_APP_HOST}/${testiData?.imageUrl}`}
                alt={testiData?.name}
                className='position-absolute'
                style={{ zIndex: 2 }}
              />
              <img
                src={TestimoniFrame}
                alt={testiData?.name}
                className='position-absolute'
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              />
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6 testi-content'>
            <h4>{testiData?.name}</h4>
            <Star
              value={testiData?.rate}
              width={34}
              height={35}
              spacing={4}></Star>
            <h5 className='h2 fw-light my-3'>{testiData?.content}</h5>
            <span className='text-gray-500'>
              {testiData?.familyName}, {testiData?.familyOccupation}
            </span>
            <div>
              <Button
                className='btn px-5'
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                isWidthAuto
                type='link'
                href={`/testimonial/${testiData?._id}`}>
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
