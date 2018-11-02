import React, { Component } from 'react';


export default class Video extends Component {

	render(){
		return (
	      <div>
	      	<iframe title="video" src={this.props.urlSource} type="text/html" width="640" height="385" frameBorder="0">
	      	</iframe>		      
	      </div>  
	      );
	}
}

