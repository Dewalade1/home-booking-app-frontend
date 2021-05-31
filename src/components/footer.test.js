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

it('should show divider', () => {
    expect(getByTestId(container, "divider")).toBeTruthy();
});

it('should show copyright info', () => {
    expect(getByTestId("copyright-info")).toBeTruthy();
});

it("should show footer links", () => {
  expect(getByTestId(container, "footer-links")).toBeTruthy();
});