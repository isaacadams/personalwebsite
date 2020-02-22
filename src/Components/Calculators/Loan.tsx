import React, { useState, useEffect, useMemo } from "react";
import NumberFormat from "react-number-format";
import { Currency } from "../Shared/Inputs/Currency";
import { Percent } from "../Shared/Inputs/Percent";
import { Number } from "../Shared/Inputs/Number";

export interface ILoanArguments {
    presentValue: number,
    rate: number,
    periods: number
}

/**
 * 
 * @param pv present value of the loan
 * @param r interest rate per period
 * @param n number of periods
 */
function LoanPayment(pv: number, r: number, n: number) {
    let divisor = 1 - Math.pow(1 + r, -1 * n);
    let payment = r * pv / divisor;
    return payment;
}


function LoanPaymentView({ presentValue, rate, periods, ...props }: any) {
    let payment = LoanPayment(presentValue, rate, periods);

    return (
        <NumberFormat 
            className={props.className}
            value={payment} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
            decimalScale={2}
        />
    );
}


export function LoanPaymentCalculator(props) {
    
    let [state, setState] = useState({
        LoanAmount: 250000,
        rate: 0.04,
        years: 30
    });

    return (
        <div className="container">
            <div className="row">
                <Currency value={state.LoanAmount} name="LoanAmount" update={(n, v) => Update("LoanAmount", v)} />
                <Percent value={state.rate} name="rate" update={(n, v) => Update("rate", v)} />
                <Number value={state.years} name="years" update={(n, v) => Update("years", v)} />
            </div>                
            <div className="row mt-4">
                <span className="col-2">Loan Payment</span>
                <LoanPaymentView className="col" 
                    presentValue={state.LoanAmount} 
                    rate={state.rate} 
                    periods={state.years} />
            </div>                
        </div>
    );

    function Update(name, value) {
        setState({
            ...state,
            [name]: value
        });
    }
}