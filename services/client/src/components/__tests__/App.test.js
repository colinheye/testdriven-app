import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import App from '../../App';

const response = {
    'data': {
        'status': 'success',
        'users': [
            {
                'active': true,
                'email': 'michael@realpython.com',
                'id': 1,
                'username': 'michael'
            },
            {
                'active': true,
                'email': 'fletcher@realpython.com',
                'id': 2,
                'username': 'fletcher'
            }
        ]
    }
}

test('App renders without crashing', () => {
    var mock = new MockAdapter(axios);
    mock.onGet(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`).reply(200, response);
    const wrapper = shallow(<App />);
});