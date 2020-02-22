import React, { useState, useEffect, useMemo } from "react";
import NumberFormat from "react-number-format";
import { Currency } from "../Shared/Inputs/Currency";
import { Percent } from "../Shared/Inputs/Percent";
import { Number } from "../Shared/Inputs/Number";

/**
 * @param p the initial principal amount
 * @param r the interest rate
 * @param n the number of times interest rate compounds within one unit of 't'
 * @param t life of loan
 * @param pmt the amount of money contributed per unit of t
 * @returns the accrued value of investment at the end
 */
function CompoundInterest(p: number, r: number, n: number, t: number, pmt: number): number {
    let multiplier = Math.pow(1 + r / n, n * t);
    let a = p * multiplier;
    let s = pmt * (multiplier - 1) / (r / n);
    return a + s;
}

function CompoundInterestView({ p, r, n, t, pmt, ...props }) {
    
    let final = CompoundInterest(p, r, n, t, pmt);
    
    return (
        <NumberFormat 
            className={props.className}
            value={final} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
            decimalScale={2} />
    );
}

export function CompoundInterestCalculator(props) {
    
    let [state, setState]  = useState({
        principal: 100000,
        contributions: 100,
        rate: 0.04,
        compound: 1,
        time: 30,
    });
    return (
        <div className="container">
            <div className="row">
                <Currency update={Update} value={state.principal} name="principal" />
                <Currency update={Update} value={state.contributions} name="contributions" />
                <Percent update={Update} value={state.rate} name="rate" />
                <Number update={Update} value={state.compound} name="compound" />
                <Number update={Update} value={state.time} name="time" />
            </div>                
            <div className="row mt-4">
                <span className="col-2">Future Value</span>
                <CompoundInterestView className="col" 
                    p={state.principal} 
                    r={state.rate} 
                    n={state.compound} 
                    t={state.time}
                    pmt={state.contributions} />
            </div>                
        </div>
    );

    function Update(name: any, value: any) {
        
        setState({
            ...state,
            [name]: value
        });
    }
}