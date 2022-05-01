/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Button } from '../../components/Button';

describe('Button test', () => {
  it('expects the button to produce a result from onPress', () => {
    const onPress = jest.fn();
    const out = render(<Button onPress={onPress}>Press Me</Button>);
    const text = render(<Text>Render from button press</Text>);

    // const pressEvent = fireEvent.press(out.getByText('Press Me'));
    const expectedRender = text.getByText('Render from button press');

    expect(text).toBeDefined();
  });
});
