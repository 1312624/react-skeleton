import React, { Component } from "react";
import Layout from "./Components/Layout";
import IndexPage from "./Components/IndexPage";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

export default class AppRoute extends Component {
	render() {
		return (
			<Router history={browserHistory} key={Math.random()}>
				<Route path="/" component={Layout}>
					<IndexRoute component={IndexPage}/>
				</Route>
			</Router>
		);
	}
}
