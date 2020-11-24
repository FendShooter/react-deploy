import React, { useState } from 'react'
import data from '../../data'
import Plan from './Plan'
function Plans({ annualFee }) {
  const [plans] = useState(data);

  return (
    <>
      {plans.map((plan) => (
        <Plan key={plan.id} {...plan} annualFee={annualFee} />
      ))}
    </>
  );
}

export default Plans
