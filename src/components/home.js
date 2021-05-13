import React from 'react';

export default function Home () {

    // const homesDataPromise = apiClient.getHomes();
    const homesDataPromise = Promise.resolve([
      {
        title: "Test Home 1",
        image: "images/house-img-1.jpg",
        location: "Test Location 1",
        price: "$13.99",
      },
      {
        title: "Test Home 2",
        image: "images/house-img-2.jpg",
        location: "Test Location 2",
        price: "$10.99",
      },
      {
        title: "Test Home 3",
        image: "images/house-img-3.jpg",
        location: "Test Location 3",
        price: "$20.99",
      },
      {
        title: "Test Home 4",
        image: "images/house-img-4.jpg",
        location: "Test Location 4",
        price: "$16.99",
      },
      {
        title: "Test Home 5",
        image: "images/house-img-5.jpg",
        location: "Test Location 5",
        price: "$19.99",
      },
    ]);

    let homes;

    homesDataPromise.then(homesData => {
        homes = homesData.map(home => {
            return(
                <div data-testid="home">Home 1</div>
            )
        })
    })

    return(
        <div>
            <div data-testid="home">
                Home
            </div>
        </div>
    )
};