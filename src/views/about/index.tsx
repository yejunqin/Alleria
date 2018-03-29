import * as React from "react";

interface AboutProps {}
interface AboutState {}
export class About extends React.Component<AboutProps, AboutState> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>About Page.</div>
		);
	}
}
export default About;
