import React, {useState} from 'react';
import Profile from './images/Big_O_Bot_Profile.PNG';
import Tweets from './images/Big_O_Bot_Tweets.PNG';
import Dialog from './Dialog';
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const BigOBot = () => {


	return (
		<div className = "page-section bg mb-0" id = "about">
			<div className = "container">
				<div className = "text-center">
					<h2 className = "page-section-heading d-inline-block">The Big O Bot - A Twitter Bot</h2>
				</div>
				<div className = "divider-custom divider-light"></div>

				<div>
					<p className = "pre-wrap lead">
						The Big O Bot is a Twitter bot that creates and sends tweets every 4-6 hours.
						The bot is also able to take a valid user inputted noun, reproduce that message, and reply back
						to the original sender. Each tweet and reply has the bot appending "#Big" to the beginning of a noun.
						
					</p>
					<p className = "pre-wrap lead">
						The Big O Bot was developed in Python 3.7, using the Tweepy library to interact with the
						Twitter API. To ensure the user provides a valid input, the bot makes use of python's built-in
						NLP library named NLTK to parse nouns. The bot is currently being hosted on PythonAnywhere.
					</p>
					<div className = "slideshow">
						<Carousel>
		               		<div>
		                  		<img src= {Profile} />
		                   		<p className="legend">Login</p>
		             		</div>
		               		<div>
		                  		<img src= {Tweets} />
		                   		<p className="legend">Registration</p>
		               		</div>
		               	</Carousel>
		            </div>

					<div className = "links">
						<a href = "http://twitter.com/BigOsBot" target = "_blank">
							<button className = "linkBtn">Go to Bot</button>
						</a>
						<a href = "http://github.com/omorhbi/BigOsBot" target = "_blank">
							<button className = "linkBtn">Source Code</button>
						</a>
					</div>

					<div className = "supperwhere-container">
						<div className = "image-container">
							<Dialog 
								image = {Profile}
							/>
							<Dialog
								image = {Tweets}
							/>						
						</div>
					</div>

				</div>
			</div>

		</div>


	)
}

export default BigOBot;