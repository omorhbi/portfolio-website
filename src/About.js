import React, {useEffect} from 'react';
import './styles.css';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picture from './images/myself.jpg'

const About = ({open}) => {

	return (
		<div className = "about-container bg">
			<img className ="about-image mb-4" src = {Picture} />
			<h2 className = "masthead-heading mb-1"></h2>
			<div id = "bio">
				<p className = "pre-wrap">Hello there! I am Omar Morhbi. Born and raised in Brooklyn, I'm a passionate Software Engineer, graduating from NYU in Computer Science earlier this year.
				My areas of interest and profiency lie in Full Stack Web Development and Data Analysis.
				I'm looking to join a team of equally passionate and skilled programmers to make amazing products.</p>
			</div>

			<div className = "row-supperwhere">
				<div className = "col-md-7 col-lg-3 mb-3">
				    <ul>
						<div className = "portfolio-item-contact mx-auto">
							<li><a href = "tel:+1-718-360-3064">
								<span className = "icon-contact mb-3">
									<FontAwesomeIcon icon = {faMobileAlt}/>
								</span>	
							</a></li>
						</div>
						<li><span className = "contact-info">718-360-3064</span></li>
					</ul>
				</div>
				<div className = "col-md-7 col-lg-3 mb-3">
					<ul>
						<div className = "portfolio-item-contact mx-auto">
							<li><a href = "mailto:omorhbi@gmail.com" target = "_blank">
								<span className = "icon-contact mb-3">
									<FontAwesomeIcon icon = {faEnvelope}/>
								</span>
							</a></li>
						</div>
						<div>
							<li><span className = "contact-info">omorhbi@gmail.com</span></li>
						</div>
					</ul>

				</div>
				<div className = "col-md-7 col-lg-3 mb-3">
					<div className = "portfolio-item-contact mx-auto">
						<a href = "http://github.com/omorhbi" target = "_blank">
							<div className = "icon-contact mb-3">
								<FontAwesomeIcon icon = {faGithub}/>
							</div>
						</a>
					</div>
					<div>
						<li><span className = "contact-info">Github</span></li>
					</div>
				</div>
				<div className = "col-md-7 col-lg-3 mb-3">
					<div className = "portfolio-item-contact mx-auto">
						<a href = "https://www.linkedin.com/in/omar-morhbi-9b890515a/" target = "_blank">
							<div className = "icon-contact mb-3">
								<FontAwesomeIcon icon = {faLinkedin}/>
							</div>
						</a>
					</div>
					<div>
						<li><span className = "contact-info">Linkedin</span></li>
					</div>
				</div>
			</div>
		</div>

	);
};

export default About;