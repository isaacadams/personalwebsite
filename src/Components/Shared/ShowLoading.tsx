import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export function ShowLoading(props) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <FontAwesomeIcon icon={['fas', 'spinner']} spin />
    </div>
  );
}
