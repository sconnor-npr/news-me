import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';

import {SearchBox} from './components/search/SearchBox';
import {ResultsCard} from './components/search/ResultsCard';
import {updateSearchText} from './redux/search/search';

class App extends PureComponent {

  _onSearch = ({target: {value}}) => {
    const {updateSearchText} = this.props;

    updateSearchText(value);
  };

  render() {
    const {searchText, articles} = this.props;

    return (
      <div id="app-root" className="d-flex flex-column container">
        <Container fluid className="d-flex flex-column flex-grow body-container w-75 mx-auto mt-3">
          <SearchBox className="automation-search-box" 
                     placeholder="Search"
                     onChange={this._onSearch} 
                     searchText={searchText}/>
          {articles.length > 0 && 
          <div className="automation-search-results">
              {articles.map((article, idx) => <ResultsCard key={idx} article={article}/>)}
          </div>}
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  searchText: PropTypes.string,
  articles: PropTypes.array.isRequired,
  updateSearchText: PropTypes.func.isRequired
};

const mapStateToProps = ({search: {searchText, articles}}) => ({
    searchText,
    articles
});

const mapDispatchToProps = {updateSearchText};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
