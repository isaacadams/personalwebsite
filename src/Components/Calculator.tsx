import React from 'react';
import {CompoundInterestCalculator} from './Calculators/CompoundInterest';
import {LoanPaymentCalculator} from './Calculators/Loan';

export function Calculator(props) {
  return (
    <>
      <CompoundInterestCalculator />
      <LoanPaymentCalculator />
    </>
  );
}
