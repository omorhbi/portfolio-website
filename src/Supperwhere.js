import React, {useState} from 'react';
import Landing from './images/supperwhere_landing_page.PNG';
import Login from './images/login_page.PNG';
import Registration from './images/register_page.PNG';
import Profile from './images/profile_page.PNG';
import Preferences from './images/preferences_page.PNG';
import SearchNoPrefs from './images/search_no_prefs.PNG';
import SearchPrefs from './images/search_prefs.PNG';
import MealHistory from './images/meal_history.PNG';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dialog from './Dialog';
import { ExternalLink } from 'react-external-link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Supperwhere = () => {
	return (
		<div className = "page-section bg mb-0" id = "about">
			<div className = "container">
				<div className = "text-center">
					<h2 className = "page-section-heading d-inline-block">Supperwhere - A Restaurant Recommender</h2>
				</div>

				<div className = 'divider-custom divider-light'></div>

				<div className = "">

					<p className = "pre-wrap lead">
						Supperwhere is a web application designed to help indecisive users figure out what they wannt to eat by 
						recommending restaurants based on their dietary and cost preferences, and meal history. Through this, Supperwhere 
						allows the user to overcome their indecisiveness, making the dining experience quicker and more enjoyable.
					</p>
					<div className = "slideshow">
						<Carousel>
	                		<div>
	                   			<img src= {Login} />
	                   			<p className="legend">Login</p>
	             			</div>
	                		<div>
	                   			<img src= {Registration} />
	                   			<p className="legend">Registration</p>
	               			</div>
	               			<div>
	                   			<img src= {Profile} />
	                   			<p className="legend">Profile</p>
	               			</div>
	               			<div>
	                   			<img src= {Preferences} />
	                   			<p className="legend">Preferences</p>
	               			</div>
	                		<div>
	                    		<img src= {SearchNoPrefs} />
	                    		<p className="legend">Search</p>
	                		</div>
	                		<div>
	                   			<img src= {MealHistory} />
	                   			<p className="legend">Meal History</p>
	               			</div>
	           			</Carousel>
	           		</div>
					<div className = "links">
						<a href = "http://157.245.94.160:3000" target = "_blank">
							<button className = "linkBtn">Go to Site</button>
						</a>
						<a href = "http://github.com/omorhbi/spring-2020-crystal-balboa" target = "_blank">
							<button className = "linkBtn">Source Code</button>
						</a>
					</div>


					<div className = "supperwhere-container">
						<div>
							<Dialog
								image = {Login}
							/>

							<Dialog
								image = {Registration}
							/>						
						</div>
					</div>
					<p className = "pre-wrap lead">
						Supperwhere uses JSON Web Tokens to help provide security to the site. With this used,
						it checks whether or not the user is logged in whenever they want to access a page that isn't
						the login, registration, and home pages. If they're not logged in, the app will redirect them back to the login page. Once logged in, the app will provide the user a token to keep them signed in
						for one day.
						<br />
						Additionally, Supperwhere provides a validator through the use of
						@hapi/joi, a module that checks if the user provided a username upon registration or login and if the password is longer than 6 
						characters. Lastly, through the use of MongoDB, each user will have to have a unique username when signing up to the site.
					</p>

					<Dialog
						image = {Profile}
					/>
					<Dialog
						image = {Preferences}
					/>

					<div className = "supperwhere-container">
						<p className = "pre-wrap lead">
							Supperwhere takes into account your preferences and your meal history by recommending you restaurants
							to visit using Zomato's API while letting you know what your preferences are. The users can also easily change their culinary and cost preferences by going to the preferences
							page from the profile page or the navbar.
						</p>
					</div>

					<Dialog
						image = {SearchNoPrefs}
					/>
					<Dialog
						image = {MealHistory}
					/>
					
					<div className = "supperwhere-container">
						<p className = "pre-wrap lead">
							Supperwhere curates your searches through the power of Zomato's API. As the user, you can choose to search with
							or without your preferences influencing the results. You can also choose to not input anything in the search bar to 
							give you the default location with the default restaurants or you can search for a location and/or restaurant name.
							Each result will have a link that will redirect you to google maps so that you can easily route your trip to your restaurant of choice.
							Lastly, each search result allows you to add that restaurant to your meal history which can be filtered from either one week ago, one month ago,
							or since you created your account.
						</p>
					</div>

				</div>
			</div>

		</div>

	)
}

export default Supperwhere;