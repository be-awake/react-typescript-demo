import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react'

import './styles/icon.css';
import './styles/common.css';
import Store from './stores'

ReactDOM.render(
  <Provider {...Store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
