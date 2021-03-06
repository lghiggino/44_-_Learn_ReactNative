import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import DataFetcher from '../DataFetcher';

test('examples of some things', async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(
    <DataFetcher />,
  );
  const famousProgrammerInHistory = 'Ada Lovelace';

  const input = getByTestId('input');
  fireEvent.changeText(input, famousProgrammerInHistory);

  const button = getByText('Print Username');
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy());

  expect(getByTestId('printed-username').props.children).toBe(
    famousProgrammerInHistory,
  );
  expect(toJSON()).toMatchSnapshot();
});
