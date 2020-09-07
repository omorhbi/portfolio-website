import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import './styles.css';
import Resume from './Omar_Morhbi_Resume.pdf';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picture from './images/myself.jpg';

//flex-flow: row nowrap;
const Ul = styled.ul`
	list-style: none;
	display: flex;
	margin-left: auto;
	margin-bottom: 0;
	flex-direction: row;
	padding-left: 0;

	li {
		margin-left: 0.50rem;
		margin-right: 0.50rem;
	}

	li a:hover {
		color: #1f2d41;
	}

	li a:active {
		color: #fff;
	}

	@media (max-width: 768px){
		flex-flow: column nowrap;
		background-color: silver;
		position: fixed;
		transform: ${({ open}) => open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 275px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		background: RGBA(192, 192, 192, 0.95);

		li {
			font-size: 2rem;
			padding: 18px 10px;
		}
		li.icon-left {
			position: relative;
			left: 15px;
		}
		.icon-right {
			position: relative;
			bottom: 132px;
			left: 130px;
		}
		.icon-phone {
			position: relative;
			bottom: 150px;
			left: 15px;
		}
		.icon-email {
			position: relative;
			bottom: 282px;
			left: 130px;
		}
		.mobile-slide {
			transform: ${({ swipedLeft }) => swipedLeft ? 'translateX(calc(-80% - 20px))' : 'translateX(0)'};
		}

	}
	@media (min-width: 769px){
		.icon-contact {
			display: none;
		}
		a.icon {
			display: none;
		}
		li.contact_me {
			display: none;
		}
		.nav-image {
			display: none;
		}

	}
`;

const RightNavbar = ({ open }) => {

	return (
		<div className = "mobile-slide">
		<Ul open = {open}>
			<li><img className ="nav-image mb-1" src = {Picture} /></li>
			<li><a href = {Resume} target = "_blank">Resume</a></li>
			<li><Link to = '/portfolio-website/projects'>Projects</Link></li>
			<li><Link to = '/portfolio-website'>About Me</Link></li>
			<li className = "contact_me">Contact Me:</li>
			<li className = "icon-left"><a href = "http://github.com/omorhbi" target = "_blank">
				<div className = "icon-contact mb-3">
					<FontAwesomeIcon icon = {faGithub}/>
				</div>
			</a></li>
			<li className = "icon-right"><a href = "https://www.linkedin.com/in/omar-morhbi-9b890515a/" target = "_blank">
				<div className = "icon-contact mb-3">
					<FontAwesomeIcon icon = {faLinkedin}/>
				</div>
			</a></li>
			<li className = "icon-phone"><a href = "tel:+1-718-360-3064" target = "_blank">
				<div className = "icon-contact mb-3">
					<FontAwesomeIcon icon = {faPhone}/>
				</div>
			</a></li>			
			<li className = "icon-email"><a href = "mailto:omorhbi@gmail.com" target = "_blank">
				<div className = "icon-contact mb-3">
					<FontAwesomeIcon icon = {faEnvelope}/>
				</div>
			</a></li>

		</Ul>
		</div>
	)
}

export default RightNavbar;