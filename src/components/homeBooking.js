import React, { useState } from 'react';

export default function HomeBooking ({homeData}) {

    const [checkinDate, setCheckinDate] = useState();
    const [checkoutDate, setCheckoutDate] = useState();
    return (
      <>
      {homeData ? (
        <>
            <div data-testid="home-book-title">{homeData.title}</div>
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
             
            <div data-testid="total-price">{}</div>
        </>
       ) : (
        <div data-testid="empty-home-book"> 
            {null} 
        </div>
       )}
      </>
    );
}