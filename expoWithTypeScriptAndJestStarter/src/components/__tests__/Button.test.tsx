/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Button } from '../Button';

describe('Button test', () => {
  it('functions as a button', () => {
    const onPress = jest.fn();
    const out = render(<Button onPress={onPress}>Press Me</Button>);

    fireEvent.press(out.getByText('Press Me'));

    expect(onPress).toBeCalled();
  });
});
