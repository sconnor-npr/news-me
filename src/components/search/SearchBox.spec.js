import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SearchBox} from './SearchBox';

describe('Given the SearchBox Component', () => {
    let wrapper, onChange;

    beforeEach(() => {
        onChange = jasmine.createSpy('onChange');

        configure({ adapter: new Adapter() });

        wrapper = shallow(<SearchBox placeholder="Test placeholder" 
                                     searchText="Test search text"
                                     onChange={onChange}/>);
    });

    describe('When the search query changes', () => {
        let searchBox;

        beforeEach(() => {
            searchBox = wrapper.find('.automation-input-search');
            searchBox.simulate('change');
        });

        it('Should call the onChange function', () => {
            expect(onChange).toHaveBeenCalled();
        });
    });
    
});

