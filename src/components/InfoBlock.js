import * as React from 'react';

export default function InfoBlock({ children, title}) {
    return (
        <div>
            <title>
                {title}
            </title>
            <div>
                {children}
            </div>
        </div>
    );
}