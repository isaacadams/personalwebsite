import * as React from 'react';
import Resume from '@isaacadams/resume';
//import '@isaacadams/resume/package/Resume.css';
import './Resume.less';

export function ResumePage (props) {
    return (
        <div className="resume-page">
            Hello Worlds
            <Resume />
        </div>
    );
}