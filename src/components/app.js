import React, {Component} from 'react';
import CardContainer from './card-container';

export default class App extends Component {
	
	render(){
		return (
			<div>
				<h1>🃏 React memory card game</h1>
				<h2>A React based version of the memory card game.</h2>
				<CardContainer couples={this.props.couples} />
			</div>
		);
	}
	
	
}
