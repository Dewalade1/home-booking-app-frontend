import React, { useEffect, useState } from 'react';

import apiClient from '../services/apiClient';

export default function Home () {

    const [homesState, setHomesState] = useState([]);

    useEffect(() => {

      const homesDataPromise = apiClient.getHomes();

      homesDataPromise.then(homesData => console.log(homesData) || setHomesState(homesData));
    }, []);

    let homes;

        homes = homesState.map((home, index) => {
            return(
                <div data-testid="home" key={index}>Home 1</div>
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