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
      <div className="bootstrap-styles">
        <div className="row">
          <CompoundInterestCalculator />
          <LoanPaymentCalculator />
        </div>
      </div>
    );
  }
}
