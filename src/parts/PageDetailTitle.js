import Breadcrumb from 'elements/Breadcumbs';
import React from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal';
import { useParams } from 'react-router-dom';
export default function PageDetailTitle({ breadcrumb }) {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const data = page?.[id] || {};
  return (
    <section className='container spacing-sm pt-5'>
      <Fade bottom>
        <div className='row align-items-center'>
          <div className='col col-12'>
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className='col-auto col-12 text-center'>
            <h1 className='h2'>{data.title}</h1>
            <span className='text-gray-500'>
              {data.city}, {data.country}
            </span>
          </div>
          <div className='col'></div>
        </div>
      </Fade>
    </section>
  );
}
