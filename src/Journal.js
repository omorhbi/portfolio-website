import React, { useState } from 'react';
import './styles.css';
import Login from './images/Journal_Login.PNG';
import Create from './images/Make_Journal.PNG';
import Journals from './images/public_journals.PNG';
import MyJournals from './images/MyJournals.PNG';
import Dialog from './Dialog';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Journal = () => {

	return (
		<div className = "page-section bg mb-0" id = "about">
			<div className = "container">
				<div className = "text-center">
					<h2 className = "page-section-heading d-inline-block">A Certain Daily Journal - A Journal Sharing Site</h2>
				</div>
				<div className = "divider-custom divider-light"></div>

				<div>
					<p className = "pre-wrap lead">
						A Certain Daily Journal is a journal sharing website where users can view other user's journals.
						Anonymous users can also view journals but must sign up or log in to be able to create journals.
					</p>
					<br/>
					<p className = "pre-wrap lead">
						A Certain Daily Journal was built in Node.js, with Express.js and MongoDB serving as the backend
						with the front-end designed with handlebars powering the html and bootstrap providing the CSS.
					</p>
				</div>
				<div className = "slideshow">
					<Carousel>
	               		<div>
	                  		<img src= {Create} />
	                   		<p className="legend">Login</p>
	             		</div>
	               		<div>
	                  		<img src= {Journals} />
	                   		<p className="legend">Registration</p>
	               		</div>
	               		<div>
	                  		<img src= {MyJournals} />
	                   		<p className="legend">Profile</p>
	               		</div>
	               		<div>
	                   		<img src= {Login} />
	                   		<p className="legend">Preferences</p>
	               		</div>
	               	</Carousel>
	            </div>
				<div className = "links">
					<a href = "http://github.com/omorhbi/AIT_Project" target = "_blank">
						<button className = "linkBtn"> Source Code </button>
					</a>

				<p className = "pre-wrap lead">
					*The site will be redesigned for deployment to heroku at a future date*
				</p>
				</div>

				<Dialog 
					image = {Create}
				/>
				<Dialog
					image = {Journals}
				/>

				<p className = "pre-wrap lead">
					The site's user authentication was done through passport.js. So if a user wanted to access the link to make or view
					their own journals, they would get redirected to the login and register page.
					Additionally, the site provides users with a form validator through the use of Just-validate.js. With this, users can get
					a visual response from a modal telling the user if the form was sent successfully.
				</p>

				<Dialog
					image = {MyJournals}
				/>

				<Dialog
					image = {Login}
				/>

			</div>

		</div>
	)
}

export default Journal;