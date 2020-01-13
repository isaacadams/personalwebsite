import { Input } from './Input';

export class Percent extends Input {
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
        this.setState({ value: floatValue });
        this.props.update(floatValue / 100);
    }
}
