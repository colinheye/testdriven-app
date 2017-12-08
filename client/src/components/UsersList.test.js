import { shallow, mount, render } from 'enzyme';

const users = [
    {
        'active': true,
        'email': 'michael@realpython.com',
        'id': 1,
        'username': 'michael'
    },
    {
        'active': true,
        'email': 'michael@mherman.com',
        'id': 2,
        'username': 'michaelherman'
    }
]

test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users} />);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.className).toBe('well');
    expect(element.get(0).props.children).toBe('michael');
})