import React from 'react';
import { getAllByTestId, render } from '@testing-library/react';

import Home from './home';

let container = null;

beforeEach(() => {
    container = render(<Home/>).container;
});

it('should show available homes', () => {
    const homes = getAllByTestId(container, 'home');

    expect(homes).toBeTruthy();
    expect(homes.length).toBeGreaterThan(0);
})