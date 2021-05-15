import React from "react";
import { act, fireEvent, getByTestId, render } from "@testing-library/react";

import HomeBooking from "./homeBooking";
import apiClient from "../services/apiClient";
import bookingDialogService from "../services/bookingDialogService";
import notificationService from "../services/notificationService";

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
  expect(getByTestId(container, "home-book-price").textContent).toBe("=N=31,000 per night");
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

  expect(getByTestId(container, "total-price").textContent).toBe("Total: =N=93000");
});

it('should book home after clicking the book button', () => {
    // spy on apiClient
    jest.spyOn(apiClient, 'bookHome').mockImplementation(() => {
        Promise.resolve({ message: "Congrats!! Your Mocked home booking was Successful!" });
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

it('should close the dialog and show notification after booking home', async () => {

    // Spy on the client
    jest.spyOn(apiClient, 'bookHome').mockImplementation(() => Promise.resolve({ message: "Congrats!! Your Mocked home booking was Successful!" }));

    // SpyOn bookingDialog service
    jest.spyOn(bookingDialogService, 'close').mockImplementation(() => {});

    // SpyOn notification Service
    jest.spyOn(notificationService, 'open').mockImplementation(() => {});

    // enter Dates and Click book btn
    fireEvent.change( 
        getByTestId(container, 'home-book-checkin-date'),
        { target: { value: "2021-12-04" } }
    );

    fireEvent.change(
        getByTestId(container, "home-book-checkout-date"), 
        { target: { value: "2021-12-07" } });

    getByTestId(container, 'book-btn').click();

    act(async () => {});

    // assert that dialog service closed the home booking dialog
    expect(bookingDialogService.close).toHaveBeenCalled();

    // assert that the notification service posted a notification
    expect(notificationService.open).toHaveBeenCalledWith("Congrats!! Your Mocked home booking was Successful!");
});

it("should show empty when no home is provided", () => {
  container = render(<HomeBooking home={null} />).container;

  expect(getByTestId(container, "empty-home-book")).toBeTruthy();
});
