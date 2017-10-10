import React, {Component} from 'react';
import _ from 'lodash';
import Card from './card';

const initialState = {
	showAll   : true,
	frozen    : false,
	cardIds   : [],
	matches   : {},
	selected  : [],
	attempts  : 0,
	colorSalt : 0,
};


export default class CardContainer extends Component {
	
	render(){
		return (
			<div className='cards-container row'>
				<div className="col-xs-12">
					<div className='couple-input'>couples: <input type="text" placeholder={this.props.couples} /><button onClick={this.props.onCouplesChange}>change</button></div>
					<h6>your attempts: {this.state.attempts} (best: {this.props.couples})</h6>
				</div>
				{this.generateCards()}
				{(Object.keys(this.state.matches).length === this.props.couples * 2) ? this.handleWin() : null}
			</div>
		);
	}
	
	constructor( props ){
		super(props);
		this.state = _.cloneDeep(initialState);
	}
	
	componentDidUpdate( nextProps ){
		if(nextProps.couples !== this.props.couples){
			this.handleRestart();
		}
	}
	
	componentWillMount(){
		this.setState({
						  cardIds   : this.generateCardIds(this.props.couples),
						  colorSalt : Math.floor(Math.random() * 360)
					  });
		setTimeout(() =>{
			this.setState({showAll : false});
		}, 1000);
	}
	
	generateCardIds( couples ){
		let cards = [];
		for ( let i = 0; i < couples; i++ ) {
			cards.push(i + 'f');
			cards.push(i + 's');
		}
		return (arr => arr.sort(() => (Math.random() - 0.5)))(cards);
	}
	
	generateCards(){
		
		let cardInstances = [];
		this.state.cardIds.forEach(( i, id ) =>{
			
			cardInstances.push(this.bindCard(i, id));
			
		});
		
		return cardInstances;
		
	}
	
	bindCard( id ){
		return <Card show={this.handleShow(id)} onClick={this.onCardClick.bind(this, id)} key={id} color={this.generateColor(id)}></Card>;
	}
	
	handleShow( id ){
		return !!this.state.matches[ id ] || (this.state.selected.indexOf(id) > -1) || this.state.showAll;
	}
	
	generateColor( id ){
		
		let i    = id.substring(0, id.length - 1);
		let step = 360 / this.props.couples;
		let h    = (step * i + this.state.colorSalt) % 360;
		return `hsl(${h}, 70%, 50%)`;
		
	}
	
	onCardClick( id ){
		
		if ( this.state.frozen ) {
			return;
		}
		
		if ( this.state.selected.length ) { //Already clicked one -> check phase
			
			this.setState({
							  frozen   : true,
							  selected : [ ...this.state.selected, id ]
						  });
			
			let id1 = this.state.selected[ 0 ];
			if ( id1.substring(0, id1.length - 1) === id.substring(0, id.length - 1) ) {
				
				//Match case
				let newState            = Object.assign({}, this.state);
				newState.matches[ id1 ] = true;
				newState.matches[ id ]  = true;
				newState.selected       = [];
				newState.frozen         = false;
				newState.attempts       = this.state.attempts + 1;
				this.setState(newState);
				
			} else {
				
				//Not match case
				setTimeout(() =>{
					this.setState({
									  selected : [],
									  frozen   : false,
									  attempts : this.state.attempts + 1
								  });
				}, 500);
				
			}
			
		} else {
			this.setState({selected : [ id ]});
		}
		
	}
	
	handleRestart(){
		
		this.setState(_.cloneDeep(initialState));
		this.componentWillMount();
		
	}
	
	handleWin(){
		return <div className="win-modal">
			<h2>You win! 🎉</h2>
			<button onClick={this.handleRestart.bind(this)}>RESTART</button>
		</div>;
	}
	
}
