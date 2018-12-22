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

        function createBlock(title, message) {
            return {
                title: title,
                message: message
            };
        }
        let blocks = [
            createBlock('who i am', "I'm a web developer based in Malvern, PA. My passion is software development."),
            createBlock('what i can do', "I create \"mobile first\" web sites and applications."),
        ];

        let projects = [
            'Created a web based simulation of the card game War! using react',
            'Built an API that retrieves and stores healthcare information',
            ''
        ];
        
        return (
            <div>                
                {blocks.map((val, index) =>
                    <div key={index} className="info">
                        <h2 className="title">{val.title}</h2>
                        <p className="message">{val.message}</p>
                    </div>
                )}
            </div>
        );
    }
}