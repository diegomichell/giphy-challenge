import React from 'react';
import { render } from 'react-native-testing-library';
import { Home } from '../../src/screens/home';

jest.mock('../../src/components/forms/search-gift-form', () => () => null);

describe('Home Screen Test', () => {

  it('should render home screen container', async () => {
    const gifs = [];
    const search_history = [];
    const saveSearchHistory = jest.fn();
    const searchGif = jest.fn();
    const { getByTestId } = render(
      <Home gifs={gifs} search_history={search_history} saveSearchHistory={saveSearchHistory} searchGif={searchGif} />
    );

    //  @ts-ignore
    await expect(getByTestId('homeContainer')).not.toBeNull();
  });

  it('should render See search history label', async () => {
    const gifs = [];
    const search_history = [];
    const saveSearchHistory = jest.fn();
    const searchGif = jest.fn();
    const { getByText } = render(
      <Home gifs={gifs} search_history={search_history} saveSearchHistory={saveSearchHistory} searchGif={searchGif} />
    );

    //  @ts-ignore
    await expect(getByText('See search history')).not.toBeNull();
  });
});
