import React from 'react';
import { create, act} from 'react-test-renderer';

import PhotoList from '../src/views/PhotoList';

const tree = create(<PhotoList />);

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
})

test('button press', () => {
    const button = tree.root.findByProps({testID: 'myButton'}).props;
    act(() => button.onPress());
})



// I am willing to learn more about jest unit testing.
// It would be an opportunity for me to learn and grow with ValueLabs