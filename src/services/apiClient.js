const apiClient = {

    getHomes: () => {
        return fetch("https://run.mocky.io/v3/e8eec761-ab6d-4c7a-89eb-f8c10184ff04").then((response) => response.json());
    },

};

export default apiClient