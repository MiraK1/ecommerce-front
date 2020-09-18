import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// ! Routes
// * core routes
import Home from "./core/Home";

// * user Routes
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				{/* core routes */}
				<Route path='/' exact component={Home} />
				{/* user Routes */}
				<Route path='/signin' exact component={Signin} />
				<Route path='/signup' exact component={Signup} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
