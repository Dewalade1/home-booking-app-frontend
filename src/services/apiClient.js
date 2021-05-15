const apiClient = {

    getHomes: () => {
        return fetch("https://run.mocky.io/v3/91a0f51b-ceca-4a6f-9882-20dd28184c19").then((response) => response.json());
    },

    bookHome: () => {
        return Promise.resolve();
    },

};

export default apiClient