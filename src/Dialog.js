import React, { useState } from 'react';
import './styles.css';

const Dialog = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleShowDialog = () => {
		setShow(!show);
	}
	return (
	<div>
		<div className = "imagebox">
			<img className = "image" src = {props.image} onClick = {handleShowDialog}/>
		</div>
		{show && (
			<dialog className = "dialog" open onClick = {handleShowDialog}>
				<img src = {props.image}/>
				<div className = "image-close" onClick = {handleShowDialog}></div>

			</dialog>
		)}
	</div>
	)
}

export default Dialog;