import { NavPageComponent } from "./Shared/NavPageComponent";
import NumberFormat from 'react-number-format';
import React, { useState } from "react";

export class Calculator extends NavPageComponent {
    constructor(props: any) {
        super(props);
        this.state = {
            principal: 100000,
            rate: 0.04,
            compound: 1,
            time: 30,
        };
    }
    render() {
        return (
            <div className="container">
                <Currency initial={this.state.principal} name="principal" update={(v) => this.setState({ principal: v })} />
                <Percent initial={this.state.rate} name="rate" update={(v) => this.setState({ rate: v })} />
                <Number initial={this.state.compound} name="compound" update={(v) => this.setState({ compound: v })} />
                <Number initial={this.state.time} name="time" update={(v) => this.setState({ time: v })} />

                <CompoundInterestView 
                    p={this.state.principal} 
                    r={this.state.rate} 
                    n={this.state.compound} 
                    t={this.state.time} />
            </div>
        );
    }
}

abstract class Input extends React.Component<{ name: string, initial: any, update: (value: any) => void }, { value: any }> {
    abstract FormatOptions;

    constructor(props) {
        super(props);
        this.state = { value: this.props.initial };
    }

    onValueChange(values) {
        let { value } = values;
        this.setState({value: value});
        this.props.update(value);
    }

    render() {        
        return <div className="row py-2">
            <label className="col-2 control-label">{this.props.name}</label>
            <NumberFormat className="col-10 form-control" name={this.props.name} value={this.state.value} {...this.FormatOptions} onValueChange={v => this.onValueChange(v)} />
        </div>
    }      
}

class Number extends Input {
    FormatOptions: any;
    constructor(props) {
        super(props);
        this.FormatOptions = {};
    }   
}

class Currency extends Input {
    FormatOptions: any;
    constructor(props) {
        super(props);

        this.FormatOptions = {
            thousandSeparator: true,
            prefix: '$'
        };
    }   
}

class Percent extends Input {
    FormatOptions: any;
    constructor(props) {
        super(props);

        this.state = { value: this.props.initial * 100 };

        this.FormatOptions = {
            suffix: '%'
        };
    }

    onValueChange(values) {
        let { floatValue } = values;       
        this.setState({value: floatValue});
        this.props.update(floatValue / 100);
    }
}

/**
 * @param p the initial principal amount
 * @param r the interest rate
 * @param n number of times interest rate compounds within one unit of 't'
 * @param t life of loan
 * @returns the accrued value of investment at the end
 */
function CompoundInterest(p: number, r: number, n: number, t: number): number {
    let pm = Math.pow(1 + r/n, n * t);
    let final = p * pm;
    return final;
}

function CompoundInterestView(props) {
    let final = CompoundInterest(props.p, props.r, props.n, props.t);

    return (
        <NumberFormat value={final} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
    );
}