import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./app";

const render = ReactDom.render;

const rootElement = document.getElementById("AppContainer");

if (__DEV__) {
	const { AppContainer } = require("react-hot-loader");
	function renderApp() {
		return render(
			<AppContainer>
				<App />
			</AppContainer>,
			rootElement
		);
	}
	renderApp();
	if (module.hot) {
		module.hot.accept("./app", () => {
			renderApp();
		});
	}
} else {
	render(<App />, rootElement);
}
