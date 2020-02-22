import NumberFormat from 'react-number-format';
import React from "react";


export abstract class Input extends React.Component<{
    name: string;
    value: any;
    update: (name: string, value: any) => void;
}, {
    value: any;
}> {
    abstract FormatOptions;
    
    constructor(props) {
        super(props);
    }
    
    onValueChange(values, name, update) {
        let { value } = values;
        update(name, value);
    }

    formatValue(v) {
        return v;
    }

    render() {
        let { update, children, ...remaining } = this.props;
        let { value, name, ...atts } = remaining;

        return (
            <NumberFormat 
                {...this.FormatOptions}
                {...atts}
                value={this.formatValue(value)}
                name={name}
                className="form-control" 
                onValueChange={v => this.onValueChange(v, name, update)}
            />
        );
    }
}