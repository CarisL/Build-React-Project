import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import store from './redux/store';

import getRouter from 'router/router';

ReactDom.render(
	<AppContainer>
		<Provider store={store}>{getRouter()}</Provider>
	</AppContainer>,
	document.getElementById('app')
);
