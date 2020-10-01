import React from 'react';
import {Link} from 'react-router-dom';
//import RightNavbar from './RightNavbar';
import styled from 'styled-components';
import Burger from './Burger';
import './styles.css';


const Navbar = () => {

	return (
		<nav className = "navbar navbar-expand-lg nav-bg fixed-top">
			<div className = "container">
				<Link to = "/" className = 'home-link'>Omar Morhbi</Link>
			<Burger />
			</div>
		</nav>
	)
}

export default Navbar;