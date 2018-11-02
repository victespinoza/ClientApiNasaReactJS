import React, { Component } from 'react';


export default class Copyright extends Component {

	render() {
	
	let elementCopyright ;
	if(this.props.copyright){
		elementCopyright = <p><b>copyright:</b> {this.props.copyright}</p>
	}
	else{
		elementCopyright = <p>(Public Domain)</p>
	}

    return (
      <div className='Copyright'>
      		{elementCopyright}      		
      </div>
      );
	}
}