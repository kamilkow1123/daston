import React from 'react';
import Home from './components/Home';
import Buildings from './components/Buildings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/buildings" component={Buildings} exact />
			</Switch>
		</Router>
	);
}

export default App;
