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
            return(
                <div data-testid="home" key={home.id}>
                    <div data-testid="home-title">{home.title}</div>
                    <img data-testid="home-image" src={home.image} alt=""/>
                    <div data-testid="home-location">{home.location}</div>
                    <div data-testid="home-price">{home.price}</div>
                </div>
            )
        });

    return(
        <div>
            <div data-testid="home">
                {homes}
            </div>
        </div>
    )
};