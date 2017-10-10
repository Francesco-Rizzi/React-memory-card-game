import React, {Component} from 'react';
import CardContainer from './card-container';

export default class App extends Component {
	
	state = {couples : 10};
	
	
	render(){
		return (
			<div>
				<h1>🃏 React memory <span className='color-anim'>card</span> game</h1>
				<h2>A React based version of the memory card game, flip the cards over and match the pairs with the fewer attempts as possible!</h2>
				<CardContainer couples={this.state.couples} onCouplesChange={this.onCouplesChange.bind(this)} />
			</div>
		);
	}
	
	onCouplesChange(){
		let DOMNode = document.querySelector('div.couple-input > input');
		let val     = DOMNode.value;
		val < 2 ? val = 2 : val > 200 ? val = 199 : val;
		DOMNode.value = val;
		if ( val > 1 && val < 200 ) {
			this.setState({couples : val});
		}
	}
	
}
