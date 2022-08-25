import { InputText, InputFile } from 'elements/Form';
import React from 'react';
import Fade from 'react-reveal/Fade';
import logoBca from 'assets/images/logo-bca.jpg';
export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <Fade>
      <div
        className='container payment-information'
        style={{ marginBottom: 30 }}
      >
        <div className='row justify-content-center align-items-center'>
          <div className='one-booking col-12 col-lg-5 border-right py-5'>
            <Fade delay={300}>
              <p className='mb-4'>Transfers Pembayaran :</p>
              <p>Tax: {tax}%</p>
              <p>Subtotal : ${subTotal} USD</p>
              <p>Total : ${grandTotal} USD</p>
              <div className='row mt-4'>
                <div className='col-3 text-right'>
                  <img src={logoBca} alt='Bank Central Asia' width='60' />
                </div>
                <div className='col'>
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>8650439890</dd>
                    <dd>Abdul Rahman</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className='two-booking col-12 col-lg-5 py-5'>
            <Fade delay={600}>
              <label htmlFor='proofPayment'>Upload Bukti Transfers</label>
              <InputFile
                accept='image/*'
                id='proofPayment'
                name='proofPayment'
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor='bankName'>Asal Bank</label>
              <InputText
                id='bankName'
                name='bankName'
                type='text'
                value={data.bankName}
                onChange={props.onChange}
              />
              <label htmlFor='bankHolder'>Nama Pengirim</label>
              <InputText
                id='bankHolder'
                name='bankHolder'
                type='text'
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
