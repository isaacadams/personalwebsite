import * as React from 'react';

export class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            message: props.message
        }
    }

    onClick(): void {
        window.alert(this.state.message)
    }

    render() {
        
        let hello = {
            title: 'Hi.',
            body: 'I am a software engineer for eMoney Advisor. Everything web development, software, and blockchain I love.'
        };

        let messages = [];

        for (let i = 0; i < 20; i++) {
            messages.push(hello);
        }

        return (
            <div>                
                {messages.map((val, index) =>
                    <div key={index} className="info">
                        <h3>{val.title}</h3>
                        <p>{val.body}</p>
                    </div>
                )}
            </div>
        );
    }
}