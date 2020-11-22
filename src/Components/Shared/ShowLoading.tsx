import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';

export function ShowLoading() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <FontAwesomeIcon icon={['fas', 'spinner']} spin />
    </div>
  );
}
