import React, { useRef, useState } from 'react';
import Plans from '../plans/Plans';
import './main.scss';
function Main() {
  const [annualFee, setAnnualFee]=useState(false)
  const btnSwitcher = useRef();

  const priceSwitch = () => {
    if (!btnSwitcher.current.classList.contains('active')) {
      btnSwitcher.current.classList.add('active');
      setAnnualFee(true)
    } else {
      btnSwitcher.current.classList.remove('active');
      setAnnualFee(false)
    }
  };
  return (
    <main className='main'>
      <div className='main__header'>
        <h1 className='price--title'>Pricing</h1>
        <p className='lead color-gray'>
          Select our best plan & get our best price
        </p>
        <div className='btn btn--plan'>
          <span className='btn__switcher' ref={btnSwitcher}></span>
          <span onClick={priceSwitch} className='monthly'>
            Monthly
          </span>
          <span className='annual' onClick={priceSwitch}>
            Annual
          </span>
        </div>
        <div className='plans--container'>
          <Plans annualFee={annualFee} />
        </div>
      </div>
    </main>
  );
}

export default Main;
