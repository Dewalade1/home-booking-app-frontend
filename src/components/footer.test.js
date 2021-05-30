import React from 'react';

import { getByTestId, render } from '@testing-library/react';

import Footer from './footer';

let container = null;

beforeEach(() => {
    container = render(<Footer/>).container;
});

it('should show at the bottom of the page', () => {
    expect(getByTestId(container, 'footer')).toBeTruthy();
});