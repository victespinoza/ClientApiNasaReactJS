import React, { Component } from 'react';


export default class Explanation extends Component {

	render() {
		
    return (
    	<div className='Explanation'>
    		<p >{this.props.explanation}</p>
    	</div>
    	);    
	}
}