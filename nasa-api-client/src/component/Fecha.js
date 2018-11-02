import React, { Component } from 'react';
import '../style/styles.css'


export default class Fecha extends Component {

	render() {		
    
    return (
    	<div className='Fecha'>
    		<p><b>Fecha:</b> {this.props.fecha}</p>
    	</div>
    	);

    
	}
}