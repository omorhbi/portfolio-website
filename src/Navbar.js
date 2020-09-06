import React from 'react';
import RightNavbar from './RightNavbar';
import styled from 'styled-components';
import Burger from './Burger';
import './styles.css';

const Nav = styled.nav `
	width: 100%;
	height: 55px;
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	font-size: 2rem;


`

const Navbar = () => {

	return (
		<nav className = "navbar navbar-expand-lg nav-bg fixed-top">
			<div className = "container">
				Omar Morhbi	
			<Burger />
			</div>
		</nav>
	)
}

export default Navbar;