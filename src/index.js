import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from '@/containers/App';
import configureStore from './configure-store';

const store = configureStore();
render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
