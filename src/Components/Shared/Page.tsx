import * as React from 'react';
import * as $ from 'jquery';

interface state<TData> {
    data: TData[]
}

export class PageComponent<TData> extends React.Component<any, state<TData>> {
    datafilename: string;
    constructor(props: any) {
        super(props);
        this.state = this.getInitialState();        
    }

    getInitialState(): state<TData> {
        return {
            data: undefined
        };
    }

    LoadData(): void {
        var endpoint = "/assets/data/" + this.datafilename + ".json";
        let self = this;

        $.ajax({
            url: endpoint,
            success: function (data) {
                self.setState({ data: data });
            }
        });
    }

    componentDidMount() {
        this.LoadData();
    }

    render() {
        // Handle case where the response is not here yet
        if (!this.state.data) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something...
            return <div>The responsive it not here yet!</div>;
        }
        else if (this.state.data.length === 0) {
            // Gives you the opportunity to handle the case where the ajax request
            // completed but the result array is empty
            return <div>No result found for this subscription</div>;
        }
    }
}