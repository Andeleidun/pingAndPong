import React from 'react';
import { Workspace } from './components/Workspace';
import { Panel } from './components/Panel';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Workspace panels={[({getWorkspaceValue, setWorkspaceValue}) =>
          (<Panel backgroundColor='orange'>
            <button 
              disabled={getWorkspaceValue('buttonState') === 'ping'} 
              onClick={() => setWorkspaceValue('buttonState', 'ping')}
            >
              Ping
            </button>
          </Panel>), ({getWorkspaceValue, setWorkspaceValue}) =>
          (<Panel>
            <button 
              disabled={getWorkspaceValue('buttonState') !== 'ping'} 
              onClick={() => setWorkspaceValue('buttonState', 'pong')}
            >
              Pong
            </button>
          </Panel>), ({getWorkspaceValue, setWorkspaceValue}) =>
          (<Panel backgroundColor={getWorkspaceValue('dynamicBackground')}>
            <input 
              value={getWorkspaceValue('dynamicBackground') ?? 'cornflowerblue'} 
              onChange={(e) => setWorkspaceValue('dynamicBackground', e.target.value)} 
            />
          </Panel>)]}
        />
      </div>
    </>
  )
}

export default App
