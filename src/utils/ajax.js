const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const ajax = (url, options = {}) => {
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`
        },
        ...options
    }).then(response => {
        if (!response.ok) {
            return new Error('The service request was not OK: ', response);
        }

        return response;
    }).catch(error => {
        return new Error(error);
    });
};

export default ajax;