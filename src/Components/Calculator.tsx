import { NavPageComponent } from "./Shared/NavPageComponent";
import NumberFormat from 'react-number-format';
import React, { useState } from "react";
import { Currency } from "./Shared/Inputs/Currency";
import { Number } from "./Shared/Inputs/Number";
import { Percent } from "./Shared/Inputs/Percent";

export class Calculator extends NavPageComponent {
    constructor(props: any) {
        super(props);
        this.state = {
            principal: 100000,
            contributions: 100,
            rate: 0.04,
            compound: 1,
            time: 30,
        };
    }
    render() {
        return (
            <div className="container">
                <Currency initial={this.state.principal} name="principal" update={(v) => this.setState({ principal: v })} />
                <Currency initial={this.state.contributions} name="contributions" update={(v) => this.setState({ contributions: v })} />
                <Percent initial={this.state.rate} name="rate" update={(v) => this.setState({ rate: v })} />
                <Number initial={this.state.compound} name="compound" update={(v) => this.setState({ compound: v })} />
                <Number initial={this.state.time} name="time" update={(v) => this.setState({ time: v })} />

                <div className="row mt-4">
                    <span className="col-2">Future Value</span>
                    <CompoundInterestView className="col" 
                    p={this.state.principal} 
                    r={this.state.rate} 
                    n={this.state.compound} 
                    t={this.state.time}
                    pmt={this.state.contributions} />
                </div>                
            </div>
        );
    }
}

/**
 * @param p the initial principal amount
 * @param r the interest rate
 * @param n the number of times interest rate compounds within one unit of 't'
 * @param t life of loan
 * @param pmt the amount of money contributed per unit of t
 * @returns the accrued value of investment at the end
 */
function CompoundInterest(p: number, r: number, n: number, t: number, pmt: number): number {
    let multiplier = Math.pow(1 + r/n, n * t);
    let a = p * multiplier;
    let s = pmt * (multiplier - 1) / (r/n);
    return a + s;
}

function CompoundInterestView(props) {
    let final = CompoundInterest(props.p, props.r, props.n, props.t, props.pmt);

    return (
        <NumberFormat 
            value={final} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
            decimalScale={2} />
    );
}