import ajax from '../utils/ajax';
import {getArticlesEndpoint} from '../config/services.conf';

const fetchArticles = searchText => {
    const {url, method} = getArticlesEndpoint(searchText);
    return ajax(url, {method})
        .then(response => response.json());
};

export {
    fetchArticles
};