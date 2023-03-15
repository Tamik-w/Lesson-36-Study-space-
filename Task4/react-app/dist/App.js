'use strict';

import Hello from "./Hello.js";

function App() {
    var title = 'Hello React';
    return React.createElement(
        'div',
        { style: { backgroundColor: '#45B1DE' }, className: 'wrapper' },
        React.createElement(Hello, { headerTitle: title }),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return console.log('Click on button');
                } },
            'Button'
        )
    );
}

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));