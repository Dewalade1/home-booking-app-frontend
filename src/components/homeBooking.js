import React from 'react';

export default function HomeBooking ({homeData}) {
    return (
      <>
      {homeData ? (
        <>
            <div data-testid="home-book-title">{homeData.title}</div>
            <div data-testid="home-book-price">{homeData.price}</div>
            <input data-testid="home-book-checkin-date" />
            <input data-testid="home-book-checkout-date" />
        </>
       ) : (
        <div data-testid="empty-home-book"> 
            {null} 
        </div>
       )}
      </>
    );
}