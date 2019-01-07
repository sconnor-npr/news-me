import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ResultsCard} from './ResultsCard';

describe('Given the ResultsCard Component', () => {
    let wrapper, card;
    const article = {
        author: 'Test author',
        title: 'Test title',
        description: 'Test description',
        url: 'Test url'
    };

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        wrapper = shallow(<ResultsCard article={article}/>);
        card = wrapper.find('.automation-card');

    });

    it('Should render a card', () => {
        expect(card.exists()).toBe(true);
    });
    
});

