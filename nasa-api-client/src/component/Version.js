import React, { Component } from 'react';


export default class Version extends Component {

	render() {		
    
    return (
    	<div className='Version'>
    		<p><b>Version:</b> {this.props.version}</p>
    	</div>
    	);

    
	}
}