import * as React from 'react';
import * as $ from 'jquery';

interface state {
    pictures: string[]
}

export class Gallery extends React.Component<any, state> {
    //pictures: string[]
    constructor(props: any) {
        super(props);

        //this.pictures = this.LoadPictures();
        this.state = this.getInitialState();
    }

    getInitialState(): state {
        return {
            pictures: undefined
        };
    }

    LoadPictures(): string[] {
        var dir = "/assets/imgs/gallery/";
        let ext: string = ".jpg, .jpeg";
        let pictures: string[] = [];
        let self = this;

        $.ajax({
            url: dir,
            success: function (data) {

                let find: string = '';
                ext.split(/\s*,\s*/g).map((v, i) => {
                    let contains = `a:contains(${v})`;
                    find += i == 0 ? contains : `,${contains}`;
                });

                $.default(data).find(find).each(function (index, name: HTMLHtmlElement) {
                    let path = name.getAttribute('href');
                    pictures.push(path);                    
                });

                self.setState({pictures: pictures});
            }
        });

        return pictures;        
    }

    componentDidMount() {
        this.LoadPictures();
    }

    render() {
        // Handle case where the response is not here yet
        if (!this.state.pictures) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something...
            return <div>The responsive it not here yet!</div>
        }
        else if (this.state.pictures.length === 0) {
            // Gives you the opportunity to handle the case where the ajax request
            // completed but the result array is empty
            return <div>No result found for this subscription</div>;
        }

        return (
            <div id="gallery">
                {this.state.pictures.map((value: string, index: number) => <img key={index} src={value} />)}
            </div>
        );
    }
}