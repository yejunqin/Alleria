import * as React from "react";

interface IndexProps {}
interface IndexState {}
export class Index extends React.Component<IndexProps, IndexState> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				index page.
			</div>
		);
	}
}
