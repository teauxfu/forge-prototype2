import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Doc from "./hello.mdx"

function render() {
  ReactDOM.render(<Doc/>, document.body);
}

render();