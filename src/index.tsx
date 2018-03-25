import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./app";

const render = ReactDom.render;

const rootElement = document.getElementById("AppContainer");

if (__DEV__) {
	const { AppContainer } = require("react-hot-loader");
	render(
		<AppContainer>
			<App />
		</AppContainer>,
		rootElement
	);
	if (module.hot) {
		module.hot.accept("./app", () => {
			render(
				<AppContainer>
					<App />
				</AppContainer>,
				rootElement
			);
		});
	}
} else {
	render(<App />, rootElement);
}
