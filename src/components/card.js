import React, {Component} from 'react';

export default function Card( {color, show, onClick} ){
	
	return <div className='col-xs-6 col-md-3 single-memory-card-container'>
		<div style={{backgroundColor : color}} onClick={show ? null : onClick} className={"single-memory-card " + (show ? 'show' : '')}></div>
	</div>;
	
}