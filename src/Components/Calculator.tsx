import {NavPageComponent} from './Shared/NavPageComponent';
import React from 'react';
import {CompoundInterestCalculator} from './Calculators/CompoundInterest';
import {LoanPaymentCalculator} from './Calculators/Loan';

export class Calculator extends NavPageComponent {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <CompoundInterestCalculator />
          <LoanPaymentCalculator />
        </div>
      </div>
    );
  }
}
