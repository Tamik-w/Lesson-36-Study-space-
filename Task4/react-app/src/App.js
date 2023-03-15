'use strict';

import Hello from "./Hello.js"

function App() {
    const title = 'Hello React'
    return (
        <div style={{backgroundColor: '#45B1DE'}} className="wrapper">
            <Hello headerTitle = {title}/>
            <button onClick={() => console.log('Click on button')}>Button</button>
        </div>
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)