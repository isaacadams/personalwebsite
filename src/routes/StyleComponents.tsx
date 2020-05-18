import * as React from 'react';

export function WhitespaceRow({height}) {
    return (<section style={{...row, height}}>&nbsp;</section>)
}

export function YSpacer({height}) {
    return (<section style={{height}}>&nbsp;</section>)
}

export const addBootstrapToComponent = (WrappedComponent) => {
    return (function BootstrappedComponent(props) {        
        let {className, ...atts} = props;
        className = (className ? className + " " : "") + "bootstrap-styles";
        return (
            <WrappedComponent className={className} {...atts} />
        );
    });
}

export const BootstrappedRow = addBootstrapToComponent(Row);

export function Row(props) {
    
    let {children, ...atts} = props;

    return (
        <div {...atts} style={row}>
            {props.children}
        </div>
    );
}

export function Container(props) {
    return (
        <div className="max-width" style={container}>
            {props.children}
        </div>
    );
}

let container: React.CSSProperties = {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
}

let row: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
}

let col = (): React.CSSProperties => ({

});