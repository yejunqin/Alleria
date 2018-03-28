import * as React from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {}
interface HeaderState {}
export class Header extends React.Component<HeaderProps, HeaderState> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink to="/">首页</NavLink>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
