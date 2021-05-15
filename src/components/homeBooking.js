import React, { useState, useEffect } from 'react';
import moment from 'moment';

import apiClient from '../services/apiClient';
import bookingDialogService from '../services/bookingDialogService';
import notificationService from '../services/notificationService';

var _ = require('lodash');

export default function HomeBooking ({homeData}) {

    const [checkinDate, setCheckinDate] = useState();
    const [checkoutDate, setCheckoutDate] = useState();
    const [lengthOfStay, setLengthOfStay] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        
        const parsedPrice = homeData ? _.replace(homeData.price, ",", "") : 0;
        const price = parseInt(parsedPrice);
        const checkInDate = moment(checkinDate, 'YYYY-MM-DD');
        const checkOutDate = moment(checkoutDate, 'YYYY-MM-DD');
        const stayLength = isNaN(checkOutDate || checkInDate) ? 0 : checkOutDate.diff(checkInDate, "days");

        const total = stayLength * price;

        setLengthOfStay(stayLength);
        Number.isInteger(total) ? setTotalPrice(total) : setTotalPrice(0);
        
    }, [checkinDate, checkoutDate, homeData ]);

    const handleHomeBooking = () => {
        apiClient.bookHome(homeData, checkinDate, checkoutDate)
          .then(response => {
            bookingDialogService.close();
            notificationService.open(response.message);
        });
    };

    return (
      <>
        {homeData ? (
          <>
            <div className="row">
              <div className="col w-50">
                <h2 data-testid="home-book-title" className="text-dark">
                  <b>{homeData.title}</b>
                </h2>
                <div data-testid="home-book-price" className="m-b-1">
                  <span className="font-weight-bold text-success text-large">
                    <b>{`=N=${homeData.price}`}</b>
                  </span>{" "}
                  per night
                </div>
                <hr />

                <label htmlFor="checkInDate" className="m-t-1">Enter your Check-in date</label>
                <input data-testid="home-book-checkin-date" className="form-control" id="checkInDate" type="date" onChange={(e) => setCheckinDate(e.target.value)} />

                <label htmlFor="checkOutDate">Enter your check-out date</label>
                <input data-testid="home-book-checkout-date" className="form-control" id="checkOutDate" type="date" onChange={(e) => setCheckoutDate(e.target.value)} />

                <div className="row">
                  <div data-testid="total-price" className="col w-50 my-3">
                    <span className="font-weight-bold text-large">
                      <b>{`Total: =N=${totalPrice}`}</b>
                    </span>
                  </div>
                  <div data-testid="stay-length" className="col w-50 my-3">
                    <span className="font-weight-bold text-large d-flex justify-content-end">
                      <b>
                        {lengthOfStay} {lengthOfStay === 1 ? "night" : "nights"}
                      </b>
                    </span>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button onClick={handleHomeBooking} type="button" data-testid="book-btn" className="m-b-1 btn btn-success">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="col w-50 d-flex justify-self-right">
                <img src={homeData.image} alt="img not found/loaded" width={455} height={380} />
              </div>
            </div>
          </>
        ) : (
          <div data-testid="empty-home-book"></div>
        )}
      </>
    );
}