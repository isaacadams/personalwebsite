import * as React from 'react';

export function NavItemView({ name, Icon }) {
    return (<div style={{ display: "flex", alignItems: "center" }}>
        {Icon && <Icon />}
        <div style={{ width: "1rem" }}></div>
        <div>{name}</div>
    </div>);
}
