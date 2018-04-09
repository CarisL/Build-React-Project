import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bundle from './Bundle';
import Home from 'bundle-loader?lazy&name=home!components/Home/Home';

const Loading = function() {
	return <div>Loading...</div>;
};

const createComponent = component => props => (
	<Bundle load={component}>
		{Component => (Component ? <Component {...props} /> : <Loading />)}
	</Bundle>
);

const getRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/home" component={createComponent(Home)} />
		</Switch>
	</Router>
);

export default getRouter;
