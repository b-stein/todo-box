import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
	//makes Redux store available to child components
import { createStore } from 'redux';
	//creates a Redux store to hold the state of the app
import { composeWithDevTools } from 'redux-devtools-extension';
	//gives devtools view for Redux
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
