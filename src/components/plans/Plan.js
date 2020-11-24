import React from 'react'
import './plan.scss'
function Plan({ title, price, features, option, annualFee}) {

  console.log(annualFee)
  return (
    <div className='single__plan'>
      <div className="most-pop"> Most Popular</div>
      <header className='plan__header'>
        <h2 className='plan-title'>{title}</h2>
        <h1 className='plan-price'>
          ${!annualFee ?  price / 100 :(price / 100) * 12 }
          <span className='user'>/user</span>{' '}
        </h1>
        {option ? <p className='plan__option'>{option}</p> : ''}
        <a href='#!' className='btn btn--getStarted'>
          Get Started
        </a>
      </header>
      <ul className='plan__features'>
        {features.map((feature, index) => (
          <li className='plan__features--item' key={index}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plan
