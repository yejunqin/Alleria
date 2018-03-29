import * as React from "react";

interface LoadingProps {}
interface LoadingState {}
export class Loading extends React.Component<LoadingProps, LoadingState> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>Loading</div>
		);
	}
}
