import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Header } from "components/header";
import { Index } from "views/index";
import { About } from "views/about";

export const App = () => (
	<HashRouter>
		<Header />
		<Switch>
			<Route path="/" exact component={Index} />
			<Route path="/about" component={About} />
		</Switch>
	</HashRouter>
);
