import React, { Component } from 'react';


export default class Imagen extends Component {

	render(){
		
		let elementImg ;
		if(this.props.urlSource){
			elementImg = <img alt="" src={this.props.urlSource} width="250px"/>
		}
		if(this.props.urlHDSource){
			elementImg = <img alt="" src={this.props.urlHDSource} width="250px"/>
		}

		return (
	      <div>
	      	{elementImg}
	      </div>  
	      );
	}
}