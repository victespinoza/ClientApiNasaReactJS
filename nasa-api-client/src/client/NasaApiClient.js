import React, { Component } from 'react';
import axios from 'axios';
import NasaApodForm from '../form/NasaApodForm'

export default class NasaApiClient extends Component {
	constructor(props) {
		
		super(props);
		let url = 'https://api.nasa.gov/planetary/apod';
		let apiKey = this.props.apiKey;		

		axios.get(url+'?api_key='+apiKey)
		.then(response => {
			this.setState({				
				apods : response.data
			});
		})
		.catch(error => {
			console.log(error);
			
		})	
	}

	
	render() {

		return (
			<div>
				{this.state && this.state.apods &&
								
					<NasaApodForm nasaApod={this.state.apods} ></NasaApodForm> 
				
				}

			</div>
		);
	}

}
