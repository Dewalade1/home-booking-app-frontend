import React from 'react';
import { getAllByTestId, render } from "@testing-library/react";

import HomeBooking from './homeBooking';

let container = null;

const mockedHome = {
  id: "1",
  title: "Test Home 1",
  image: "images/house-img-1.jpg",
  location: "Test Location 1",
  price: "13.99",
};

beforeEach(() => {
    container = render(<HomeBooking homeData={ mockedHome }/>).container;
});

it('Home booking dialox box should render properly', () => {
    console.log(container.innerHTML);
    
    expect(true).toBeTruthy();
});

// should show home title
// should show price
// should show check-in date field
// should show check-out date field
// should calculate total
// should book home after clicking the book button
// should close the dialog and show notification after booking home