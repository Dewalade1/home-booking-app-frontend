const apiClient = {

    getHomes: () => {
        return fetch("https://run.mocky.io/v3/91a0f51b-ceca-4a6f-9882-20dd28184c19")
            .then((response) => response.json());
    },

    // in a real api I need to also pass the home data and booking dates as api parameters in the api call body
    bookHome: (homeData, checkinDate, checkoutDate) => {
        return fetch("https://run.mocky.io/v3/1c722cd7-0f06-400a-b079-638e23181e58")
            .then((response) => response.json());
    },

};

export default apiClient