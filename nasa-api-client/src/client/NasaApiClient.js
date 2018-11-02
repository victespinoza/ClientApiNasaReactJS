import React, { Component } from 'react';
import axios from 'axios';
import NasaApodForm from '../form/NasaApodForm'

export default class NasaApiClient extends Component {
	constructor() {
		
		super();		

		axios.get('https://api.nasa.gov/planetary/apod?api_key=eh4FxYgL7iEkJlzyfukdLmfLUkD8zlaJ5QHjesUY')
		.then(response => {
			this.setState({				
				apods : response.data
			});
		})
		.catch(error => {
			console.log(error)
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
