import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import RightNavbar from './RightNavbar';
//import { useSwipeable, Swipeable } from 'react-swipeable';
//import SwipeableViews from 'react-swipeable-views';
//import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const StyledBurger = styled.div`

	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	z-index: 20;
	display: none;

	@media (max-width: 768px){
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({open}) => open ? 'black' : '#333'};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
		}

		&:nth-child(2) {
			transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
			opacity: ${({ open }) => open ? 0 : 1};
		}
		&:nth-child(3) {
			transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
`
// controls the burger
const Burger = (props) => {
	const [open, setOpen] = useState(false);
	//const [state, dispatch] = React.useReducer(reducer, initialState)

	// node for seeing if user tapped outside the menu
	const node = useRef();
	// useState for swiping menu
	const [swipedLeft, setSwipedLeft] = useState(false);

	// handles the event for if the user clicked outside the menu or not
	const handleClick = event => {
		if (node.current.contains(event.target)){
			return;
		}
		setOpen(false);
	};  

	useEffect(() => {
		document.addEventListener("mousedown", handleClick);
		//document.addEventListener('touchmove', handlers);

		return () => {
			//document.removeEventListener('touchmove', handlers);
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);
	
	return (

		<div ref = {node}>
			<StyledBurger open = {open} onClick = {() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNavbar open = {open} />
		</div>
		

	)
}

export default Burger;