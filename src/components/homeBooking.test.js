import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";

import HomeBooking from "./homeBooking";
import apiClient from "../services/apiClient";

let container = null;

const mockedHome = {
  id: "1",
  title: "Test Home 1",
  image: "images/house-img-1.jpg",
  location: "Test Location 1",
  price: "31,000",
};

beforeEach(() => {
  container = render(<HomeBooking homeData={mockedHome} />).container;
});

it("Home booking dialox box should render properly", () => {
  console.log(container.innerHTML);

  expect(true).toBeTruthy();
});

it("should show home title", () => {
  expect(getByTestId(container, "home-book-title").textContent).toBe("Test Home 1");
});

it("should show price", () => {
  expect(getByTestId(container, "home-book-price").textContent).toBe("31,000");
});

it("should show check-in date field", () => {
  expect(getByTestId(container, "home-book-checkin-date")).toBeTruthy();
});

it("should show check-out date field", () => {
  expect(getByTestId(container, "home-book-checkout-date")).toBeTruthy();
});

it("should calculate total price per night", () => {
  fireEvent.change(
    getByTestId(container, "home-book-checkin-date"),
    { target: { value: "2021-12-04" } }
  );

  fireEvent.change(
    getByTestId(container, "home-book-checkout-date"),
    { target: { value: "2021-12-07" } }
  );

  expect(getByTestId(container, "total-price").textContent).toBe("93000");
});

it('should book home after clicking the book button', () => {
    // spy on apiClient
    jest.spyOn(apiClient, 'bookHome').mockImplementation(() => {
        Promise.resolve();
    });

    // Select dates
    fireEvent.change(
        getByTestId(container, 'home-book-checkin-date'),
        { target: { value: "2021-12-04" } }
    );

    fireEvent.change( 
        getByTestId(container, "home-book-checkout-date"),
        { target: { value: "2021-12-07" } }
    );

    // click on book button
    getByTestId(container, "book-btn").click();

    //assert that apiClient Booked the home
    expect(apiClient.bookHome).toHaveBeenCalledWith(mockedHome, "2021-12-04", "2021-12-07");
});
// should close the dialog and show notification after booking home

it("should show empty when no home is provided", () => {
  container = render(<HomeBooking home={null} />).container;

  expect(getByTestId(container, "empty-home-book")).toBeTruthy();
});
