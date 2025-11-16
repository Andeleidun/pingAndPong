import React from 'react';

export const Panel = ({ children, backgroundColor = 'cornflowerblue' }) => {
    return (
        <div className="panel" style={{backgroundColor}}>
            {children}
        </div>
    );
};