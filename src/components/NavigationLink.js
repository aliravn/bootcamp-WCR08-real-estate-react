import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './Navigation.css';

const NavigationLink = (props) => {
	return (
		<NavLink to={props.path} exact activeClassName="active" className={props.className} id={props.id}>{props.title}</NavLink>
	);
}

export default NavigationLink;