import { Input } from './Input';

export class Percent extends Input {
    FormatOptions: any;
    constructor(props) {
        super(props);

        this.FormatOptions = {
            suffix: '%'
        };
    }

    onValueChange(values, name, update) {
        let { floatValue } = values;
        update(name, floatValue / 100);
    }

    formatValue(v) {
        return v * 100;
    }
}
