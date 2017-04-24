import apiRequest from 'utils/api';


const GET_USER_LIST = 'GET_USER_LIST';
const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
const GET_USER_LIST_FAILURE = 'GET_USER_LIST_FAILURE';

const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_FAILURE = 'GET_USER_FAILURE';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export function getUserList() {
    return dispatch => apiRequest('get', '/users',
        [GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE], dispatch
    );
}

export function getUser(id) {
    return dispatch => apiRequest('get', `/users/${id}`,
        [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE], dispatch
    );
}

export function createUser(data) {
    const params = data;

    return dispatch => apiRequest('post', `/users`,
        [CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE], dispatch,
        params
    );
}

const initialState = {
    userList: []
};

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_USER_LIST:
            return {
                ...state,
                userListLoading: true,
                userListLoaded: false,

            }

        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                userListLoading: false,
                userListLoaded: true,
                userList: action.data.data
            }

        case GET_USER_LIST_FAILURE:
            return {
                ...state,
                userListLoading: false,
                userListLoaded: false,
                userListFailed: true
            }

        case GET_USER: {
            return {
                ...state,
                userLoading: true,
                userLoaded: false
            }
        }

        case GET_USER_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                userLoaded: true,
                user: action.data.data
            }
        }

        case GET_USER_FAILURE: {
            return {
                ...state
            }
        }

        case CREATE_USER: {
            return {
                ...state,
                createUserLoading: true,
                createUserLoaded: false
            }
        }

        case CREATE_USER_SUCCESS: {
            return {
                ...state,
                createUserLoading: false,
                createUserLoaded: true
            }
        }

        case CREATE_USER_FAILURE: {
            return {
                ...state,
                createUserLoading: false,
                createUserLoaded: false,
                createUserErrors: []
            }
        }


        default:
            return state;
    }

}