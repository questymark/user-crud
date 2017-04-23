import axios from 'axios';
import startsWith from 'lodash/startsWith';

const host = 'http://localhost:8080';

function formatUrl(path) {
    if (startsWith(path, 'http')) return path;

    return host + path;
}

export default function apiRequest(method, operation, types, dispatch, formData) {

    const EVENT_STARTED = types[0];
    const EVENT_SUCCESS = types[1];
    const EVENT_FAILED = types[2];

    dispatch({ type: EVENT_STARTED, params: formData });

    const url = formatUrl(operation);

    axios({
        method: method,
        url: url,
        data: formData
    })
    .then(response => {
        dispatch({
            type: EVENT_SUCCESS,
            data: response
        })
    })
    .catch(error => {
        dispatch({type: EVENT_FAILED, error})
    })
}