import NumberFormat from 'react-number-format';
import React from "react";


export abstract class Input extends React.Component<{
    name: string;
    initial: any;
    update: (value: any) => void;
}, {
    value: any;
}> {
    abstract FormatOptions;
    
    constructor(props) {
        super(props);
        this.state = { value: this.props.initial };
    }
    
    onValueChange(values) {
        let { value } = values;
        this.setState({ value: value });
        this.props.update(value);
    }

    render() {
        return <div className="row py-2">
            <label className="col-12 col-lg-2 control-label">
                {this.props.name}
            </label>
            <NumberFormat 
                className="col-12 col-lg-10 form-control" 
                name={this.props.name} 
                value={this.state.value} 
                {...this.FormatOptions} 
                onValueChange={v => this.onValueChange(v)} />
        </div>;
    }
}