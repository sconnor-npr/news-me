import 'rxjs';
import './style/index';

import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './redux/index';
import App from './App';

class Bootstrap extends PureComponent {
    render() {
        const {children} = this.props;

        return (
            <Provider store={store}>
                {children}
            </Provider>
        );
    }
}

ReactDOM.render(<Bootstrap><App /></Bootstrap>, document.getElementById('root'));
