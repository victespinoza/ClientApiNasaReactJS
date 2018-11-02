import React, { Component } from 'react';
import Video from '../component/Video.js'
import Imagen from '../component/Imagen.js'
import Copyright from '../component/Copyright.js'
import Explanation from '../component/Explanation.js'
import Fecha from '../component/Fecha.js'
import Version from '../component/Version.js'
import Title from '../component/Title.js'

export default class NasaApodForm extends Component {
	render() {
    let {nasaApod} = this.props;
    let elementToDysplay;

    if(nasaApod.media_type === 'video'){
    	elementToDysplay = <Video urlSource={nasaApod.url}/> 
    }
    else if(nasaApod.media_type === 'image'){
    	elementToDysplay = <Imagen urlSource={nasaApod.url} urlHDSource={nasaApod.hdurl}/> 
    }
            
    return (
      <div className='NasaApodForm'>

      	  <Title title={nasaApod.title}/>
	      {elementToDysplay}
	  	  <Copyright copyright={nasaApod.copyright}/>
	  	  <Explanation explanation={nasaApod.explanation} />	  	  
	  	  <Fecha fecha={nasaApod.date} />
	  	  <Version version={nasaApod.service_version} />
	  	  
	   </div>
    );
  }
}
