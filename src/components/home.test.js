import React from 'react';
import { act, getAllByTestId, render } from '@testing-library/react';

import Home from './home';

let container = null;

beforeEach(async () => {
    container = render(<Home/>).container;

    await act(async () => {})
});

it('should show available homes', () => {
    const homes = getAllByTestId(container, 'home');

    expect(homes).toBeTruthy();
    expect(homes.length).toBeGreaterThan(0);
});