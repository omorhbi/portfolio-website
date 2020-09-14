import styled from 'styled-components';

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

		.inner-container {
			height: 535px;
			width: 90%;
			position: relative;
			left: 20px;
			display: ${({clicked}) => clicked ? 'none' : 'visible'}
		}
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

const Ul = styled.ul`
	list-style: none;
	display: flex;
	margin-left: auto;
	margin-bottom: 0;
	flex-direction: row;
	padding-left: 0;

	li {
		margin-left: 0.75rem;
		margin-right: 0.75rem;

	}

	a:nth-child(4) li {
		margin-right: 0px !important;
	}

	a {
		text-decoration: none;
		transition: .3s ease;
	}
	a:hover {
		opacity: 0.6;
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
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 275px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		background: RGBA(192, 192, 192, 0.95);

		li {
			font-size: 1.6rem;
			padding: 15px 10px;

		}
		a:active{
			background: #F8F8F8;
		}

		li.icon-left {
			position: relative;
			left: 20px;
		}
		.icon-right {
			position: relative;
			bottom: 121.5px;
			left: 135px;
		}
		.icon-phone {
			position: relative;
			bottom: 150px;
			left: 20px;
		}
		.icon-email {
			position: relative;
			bottom: 271px;
			left: 135px;
		}
		.mobile-slide {
			transform: ${({ clicked }) => clicked ? 'translateX(100%)' : 'translateX(0)'} !important;
		}
		mobile-link {
			display: ${({clicked}) => clicked ? 'none' : 'visible'};
		}


	}
	@media (max-width: 450px){
		width: 225px;

		li.icon-left {
			position: relative;
			left: 0px;
		}
		.icon-right {
			position: relative;
			bottom: 121px;
			left: 115px;
		}
		.icon-phone {
			position: relative;
			bottom: 150px;
			left: 0px;
		}
		.icon-email {
			position: relative;
			bottom: 271.5px;
			left: 115px;
		}
		
	}
	@media (min-width: 769px){
		.icon-left, .icon-right, .icon-email, .icon-phone {
			display: none;
		}

		li.contact_me, .nav-image, .icon-contact, a.icon {
			display: none;
		}
	}
`;

export {StyledBurger, Ul};