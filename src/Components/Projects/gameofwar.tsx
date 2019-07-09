import * as React from 'react';

export class GameOfWar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <iframe 
                src="https://cards-gameofwar.web.app/"  />
            </div>
        );
    }
}