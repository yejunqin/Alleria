import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Loadable } from "utils/loadable";
import { Header } from "components/header";
import { Index } from "views/index";

const AsyncAbout = Loadable({ loader: () => import("views/about") });

export const App = () => (
	<div>
		<Header />
		<Switch>
			<Route path="/" exact component={Index} />
			<Route path="/about" component={AsyncAbout} />
		</Switch>
	</div>
);

export default App;
