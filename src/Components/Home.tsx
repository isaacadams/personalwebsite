import * as React from 'react';
import * as $ from 'jquery';

interface data {
    title: string,
    message: string
}

interface state {
    data: data[]
}

export class Home extends React.Component<any, state> {

    constructor(props: any) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState(): state {
        return {
            data: undefined
        };
    }

    LoadData(): void {
        var endpoint = "/assets/data/home.json";
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
            return <div>The responsive it not here yet!</div>
        }
        else if (this.state.data.length === 0) {
            // Gives you the opportunity to handle the case where the ajax request
            // completed but the result array is empty
            return <div>No result found for this subscription</div>;
        }
                
        return (
            <div>                
                {this.state.data.map((val, index) =>
                    <div key={index} className="info">
                        <h2 className="title">{val.title}</h2>
                        <p className="message">{val.message}</p>
                    </div>
                )}
                <button>Message Me.</button>
            </div>
        );
    }
}