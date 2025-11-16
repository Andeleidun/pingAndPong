import { useState, Fragment } from 'react';

export const Workspace = ({ panels }) => {
    const [workspaceMap, setWorkspaceMap] = useState(new Map());

    const setWorkspaceValue = (key, value) => {
        const newMap = new Map(workspaceMap);
        newMap.set(key, value);
        setWorkspaceMap(newMap);
    };

    const getWorkspaceValue = (key) => {
        return workspaceMap.get(key);
    };
    
    return (
        <div className="workspace">
            {
                panels.map((panel, index) => 
                    <Fragment key={index}>
                        {panel({getWorkspaceValue, setWorkspaceValue})}
                    </Fragment>
                )
            }
        </div>
    );
};
