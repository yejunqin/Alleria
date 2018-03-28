import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "components/header";
import { Index } from "views/index";
import { About } from "views/about";

export const App = () => (
	<div>
		<Header />
		<Switch>
			<Route path="/" exact component={Index} />
			<Route path="/about" component={About} />
		</Switch>
	</div>
);

export default App;
