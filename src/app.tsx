import * as React from "react";

export class App extends React.Component<{}, {}> {
	constructor(props: any) {
		super(props);
		this.state = {
			name: "blog"
		}
	}
	componentDidMount() {}
	render() {
		return <div>App Pageee.</div>;
	}
}
