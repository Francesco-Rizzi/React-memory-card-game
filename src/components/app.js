import React, {Component} from 'react';
import CardContainer from './card-container';

export default class App extends Component {
	
	render(){
		return (
			<div>
				<h1>🃏 React memory <span className='color-anim'>card</span> game</h1>
				<h2>A React based version of the memory card game, flip the cards over and match the pairs with the fewer attempts as possible!</h2>
				<CardContainer couples={this.props.couples} />
			</div>
		);
	}
	
	
}
