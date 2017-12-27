import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
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

beforeAll(() => {
    global.localStorage = {
        getItem: () => 'someToken'
    };
});

test('App renders without crashing', () => {
    var mock = new MockAdapter(axios);
    mock.onGet(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`).reply(200, response);
    const wrapper = shallow(<App />);
});

test('App will call componentWillMount when mounted', () => {
    const onWillMount = jest.fn();
    App.prototype.componentWillMount = onWillMount;
    const wrapper = mount(<Router><App /></Router>);
    expect(onWillMount).toHaveBeenCalledTimes(1);
});