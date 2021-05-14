import React from 'react';
import { act, getAllByTestId, getNodeText, render } from '@testing-library/react';

import Home from './home';
import apiClient from '../services/apiClient';
import bookingDialogService from '../services/bookingDialogService';

let container = null;

beforeEach(async () => {

    jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
      return Promise.resolve([
        {
          id: "1",
          title: "Test Home 1",
          image: "images/house-img-1.jpg",
          location: "Test Location 1",
          price: "13.99",
        },
        {
          id: "2",
          title: "Test Home 2",
          image: "images/house-img-2.jpg",
          location: "Test Location 2",
          price: "10.99",
        },
        {
          id: "3",
          title: "Test Home 3",
          image: "images/house-img-3.jpg",
          location: "Test Location 3",
          price: "20.99",
        },
        {
          id: "4",
          title: "Test Home 4",
          image: "images/house-img-4.jpg",
          location: "Test Location 4",
          price: "16.99",
        },
        {
          id: "5",
          title: "Test Home 5",
          image: "images/house-img-5.jpg",
          location: "Test Location 5",
          price: "19.99",
        },
      ]);
    });

    container = render(<Home/>).container;

    await act(async () => {})
});

it('should show available homes', () => {
    const homes = getAllByTestId(container, 'home');

    expect(homes).toBeTruthy();
    expect(homes.length).toBeGreaterThan(0);
});

it('should show home name', () => {
    const homeTitles = getAllByTestId(container, 'home-title');

    expect(homeTitles[0]).toBeTruthy();
    expect(getNodeText(homeTitles[0])).toBe('Test Home 1');
});

it('should show home image',() => {
    const homeImages = getAllByTestId(container, 'home-image');

    expect(homeImages[0]).toBeTruthy();
});

it('should show home location', () => {
    const homeLocations = getAllByTestId(container, 'home-location');

    expect(homeLocations[0]).toBeTruthy();
    expect(getNodeText(homeLocations[0])).toBe('Test Location 1');
});

it('should show price of home', () => {
    const homePrices = getAllByTestId(container, 'home-price');

    expect(homePrices[0]).toBeTruthy();
    expect(getNodeText(homePrices[0])).toBe("$13.99/night");
});

it('should show home booking buttons', () => {
    const homeButtons = getAllByTestId(container, 'home-booking-btn');

    expect(homeButtons[0]).toBeTruthy();
});

it('should open home booking dialog when button is clicked', () => {
    jest.spyOn(bookingDialogService, 'open').mockImplementation(() => {});

    const homeButtons = getAllByTestId(container, 'home-booking-btn');

    homeButtons[0].click();
    expect(bookingDialogService.open).toHaveBeenCalledWith({
      id: "1",
      title: "Test Home 1",
      image: "images/house-img-1.jpg",
      location: "Test Location 1",
      price: "13.99",
    });
});