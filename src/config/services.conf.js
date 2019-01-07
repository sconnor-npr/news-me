import withQuery from 'with-query';

const SERVICES_PATH = 'https://newsapi.org/v2/everything'; 
const GET = 'GET';

const getArticlesEndpoint = searchText => ({
    method: GET,
    url: withQuery(`${SERVICES_PATH}`, {q: searchText})
});

export {
    getArticlesEndpoint
};