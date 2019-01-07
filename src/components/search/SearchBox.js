import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SearchBox extends PureComponent {

    render() {
        const {placeholder, searchText, onChange} = this.props;

        return (
            <input className="automation-input-search form-control"
                    type="text"
                    placeholder={placeholder}
                    value={searchText}
                    onChange={onChange}/>
        );
    }
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    searchText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export {SearchBox};