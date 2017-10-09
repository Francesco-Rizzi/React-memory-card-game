import {renderComponent, expect} from '../test_helper';
import CardContainer from '../../src/components/card-container';

describe('Card container', () =>{
	
	let component = renderComponent(CardContainer, {couples : 10});
	
	it('renders the right number of cards', () =>{
		expect(component.find('.single-memory-card')).to.have.length(20);
	});
	
	it('show all cards initially', () =>{
		expect(component.find('.single-memory-card.show')).to.have.length(20);
	});
	
	
	it('show only one card if clicked only one', ( done ) =>{
		const p = new Promise(( f ) =>{
			setTimeout(() =>{
				component.find('.single-memory-card-container:nth-child(2) .single-memory-card').simulate('click');
				expect(component.find('.single-memory-card.show')).to.have.length(1);
				f();
			}, 1000);
		});
		p.then(done);
	});
	
	it('show the second clicked card', ( done ) =>{
		const p = new Promise(( f ) =>{
			setTimeout(() =>{
				component.find('.single-memory-card-container:nth-child(3) .single-memory-card').simulate('click');
				expect(component.find('.single-memory-card.show')).to.have.length(2);
				f();
			}, 100);
		});
		p.then(done);
	});
	
});
