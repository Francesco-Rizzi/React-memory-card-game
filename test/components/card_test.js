import {renderComponent, expect} from '../test_helper';
import Card from '../../src/components/card';

describe('Single Card', () =>{
	
	let component;
	
	beforeEach(() =>{
		component = renderComponent(Card, {
			color   : 'hsl(20, 40%, 30%)',
			onClick : () =>{
				return 1;
			},
			show    : true
		});
	});
	
	it('has the right class', () =>{
		expect(component.find('div')).to.have.class('single-memory-card');
	});
	
	it('has the right bg', () =>{
		expect(component.find('div')).to.have.attr('style', 'background-color:hsl(20, 40%, 30%);');
	});
	
	it('adds the class `show` if visible', () =>{
		expect(component.find('div')).to.have.class('show');
	});
	
});
