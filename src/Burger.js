import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Resume from './Omar Morhbi Resume.pdf';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picture from './images/myself.jpg';
import { StyledBurger, Ul } from './components';
//import { useSwipeable, Swipeable } from 'react-swipeable';
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

//import SwipeableViews from 'react-swipeable-views';
//import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


// controls the burger
const Burger = (props) => {
	const [open, setOpen] = useState(false);
	//const [state, dispatch] = React.useReducer(reducer, initialState)
	let targetElement = null;
	// node for seeing if user tapped outside the menu
	const node = useRef();
	// useState for swiping menu
	const [swipedLeft, setSwipedLeft] = useState(false);

	const handleLinkClick = () => {
		setOpen(false);
	}

	// handles the event for if the user clicked outside the menu or not
	const handleClick = event => {
		if (node.current.contains(event.target)){
			return;
		}
		setOpen(false);
	}; 

	const openMenu = () => {
		setOpen(!open);
		/*showTargetElement();
		hideTargetElement();*/
	}

	/*const showTargetElement = () => {
		if (open){
			enableBodyScroll(targetElement);
		}

	} 

	const hideTargetElement = () => {
		if (open === false){
			enableBodyScroll(targetElement);
		}
	}*/

	useEffect(() => {
		document.addEventListener("mousedown", handleClick);
		//document.addEventListener('touchmove', handlers);
		//targetElement = document.querySelector('#target');


		return () => {
			//document.removeEventListener('touchmove', handlers);
			document.removeEventListener("mousedown", handleClick);
			//clearAllBodyScrollLocks();
		};
	}, []);

	console.log(open);
	
	return (
		<div>
		<div ref = {node} id = 'target'>
			<StyledBurger open = {open} onClick = {openMenu}>
				<div />
				<div />
				<div />
			</StyledBurger>

				<Ul open = {open}>
					<Link to = "/" onClick = {handleLinkClick}><li><img className ="nav-image mb-1" src = {Picture} /></li></Link>
					<a href = {Resume} onClick = {handleLinkClick} target = "_blank"><li>Resume</li></a>
					<Link to = '/projects' onClick = {handleLinkClick}><li>Projects</li></Link>
					<Link to = '/'onClick = {handleLinkClick}><li>About Me</li></Link>
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
		</div>
		
	)
}

export default Burger;

///<RightNav open = {open}/>