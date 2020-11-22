import * as React from 'react';
import {match as IMatch} from 'react-router-dom';

interface INavProps {
  match: IMatch;
}

export class NavPageComponent extends React.Component<INavProps, any> {
  match: IMatch;
  constructor(props: INavProps) {
    super(props);
    this.match = props.match;
  }
}
