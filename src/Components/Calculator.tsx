import { NavPageComponent } from "./Shared/NavPageComponent";
import React from "react";
import { Currency } from "./Shared/Inputs/Currency";
import { Number } from "./Shared/Inputs/Number";
import { Percent } from "./Shared/Inputs/Percent";
import { CompoundInterestCalculator } from "./Calculators/CompoundInterest";

export class Calculator extends NavPageComponent {
    constructor(props: any) {
        super(props);
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CompoundInterestCalculator />
                </div>             
            </div>
        );
    }
}