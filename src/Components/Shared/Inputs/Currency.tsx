import { Input } from './Input';

export class Currency extends Input {
    FormatOptions: any;
    constructor(props) {
        super(props);
        this.FormatOptions = {
            thousandSeparator: true,
            prefix: '$'
        };
    }
}
