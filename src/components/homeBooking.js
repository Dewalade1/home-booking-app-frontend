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
        apiClient.bookHome(homeData, checkinDate, checkoutDate).then(message => {
            bookingDialogService.close();
            notificationService.open(message);
        });
    };

    return (
      <>
      {homeData ? (
        <>
            <h4 data-testid="home-book-title" className="text-right"><b>{homeData.title}</b></h4>
            <img src={ homeData.image } alt="img not found/loaded" width={300} height={250}/>
            <div data-testid="home-book-price">{homeData.price}</div>

            <input 
             data-testid="home-book-checkin-date" 
             type="date" 
             onChange={ e => setCheckinDate(e.target.value) }
            />
            <input 
             data-testid="home-book-checkout-date" 
             type="date"
             onChange={ e => setCheckoutDate(e.target.value) }
             />

            <div data-testid="stay-length">{ lengthOfStay } {lengthOfStay === 1 ? "night" : "nights"}</div>
            <div data-testid="total-price">{ totalPrice }</div>
            <button 
             onClick={ handleHomeBooking }
             data-testid="book-btn"
             className="m-b-1"
             > 
             Book Now
             </button>
        </>
       ) : (
        <div data-testid="empty-home-book"></div>
       )}
      </>
    );
}