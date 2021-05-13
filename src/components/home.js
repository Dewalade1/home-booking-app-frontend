import React, { useEffect, useState } from 'react';

import apiClient from '../services/apiClient';

export default function Home () {

    const [homesState, setHomesState] = useState([]);

    useEffect(() => {

      const homesDataPromise = apiClient.getHomes();

      homesDataPromise.then(homesData => setHomesState(homesData));
    }, []);

    let homes;

        homes = homesState.map((home) => {
            return (
              <div className="col-6 col-md-6 col-lg-4 col-xl-3 m-b-3" key={home.id}>
                <div data-testid="home" className="card w-100 home-card">
                  <img data-testid="home-image" src={home.image} alt="home img" className="card-img-top" height="200" />
                  <div className="card-body m-b-1">
                    <div data-testid="home-title" className="card-title h5 mtb-1">
                      {home.title}
                    </div>
                    <div data-testid="home-location">
                      {home.location}
                    </div>
                    <div data-testid="home-price">${home.price}/night</div>
                  </div>
                </div>
              </div>
            );
        });

    return(
        <div className="container m4 text-center">
            <h1>Our Homes</h1>
            <h4>Choose from our selection of wonderful homes</h4>
            <div className="row d-flex justify-content-center">
                {homes}
            </div>
        </div>
    )
};