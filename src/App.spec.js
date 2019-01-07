import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './App';

describe('Given the App Component', () => {
    let wrapper, updateSearchText;

    beforeEach(() => {
        updateSearchText = jasmine.createSpy('updateSearchText');

        configure({ adapter: new Adapter() });

        wrapper = shallow(<App articles={[]} 
                               updateSearchText={updateSearchText}/>);
    });

    it('Should render a search box', () => {
        const searchBox = wrapper.find('.automation-search-box');
        expect(searchBox.exists()).toBe(true);
    });
});

