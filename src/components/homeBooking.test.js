import React from 'react';
import { getByTestId, render } from "@testing-library/react";

import HomeBooking from './homeBooking';

let container = null;

const mockedHome = {
  id: "1",
  title: "Test Home 1",
  image: "images/house-img-1.jpg",
  location: "Test Location 1",
  price: "313.99",
};

beforeEach(() => {
    container = render(<HomeBooking homeData={ mockedHome }/>).container;
});

it('Home booking dialox box should render properly', () => {
    console.log(container.innerHTML);
    
    expect(true).toBeTruthy();
});

it('should show home title', () => {
    expect(getByTestId(container, 'home-book-title').textContent).toBe('Test Home 1');
});

it('should show price', () => {
    expect(getByTestId(container, "home-book-price").textContent).toBe("313.99");
});

it('should show check-in date field', () => {
    expect(getByTestId(container, "home-book-checkin-date")).toBeTruthy();
});

it('should show check-out date field', () => {
    expect(getByTestId(container, "home-book-checkout-date")).toBeTruthy();
});

// should calculate total
// should book home after clicking the book button
// should close the dialog and show notification after booking home

it('should show empty when no home is provided', () => {

    container = render(<HomeBooking home={null} />).container;

    expect(getByTestId(container, 'empty-home-book')).toBeTruthy();
});