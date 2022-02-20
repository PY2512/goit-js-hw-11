export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchImages() {
        const axios = require('axios').default;
        const options = {
            method: 'get',
            url: 'https://pixabay.com/api/',
            params: {
                key: '25800358-94bb5f0dd44193561e070ec24',
                q: this.searchQuery,
                image_type: 'photo',
                per_page: 40,
                page: this.page,
                orientation: 'horizontal',
                safesearch: true,
            },
        };

        const serchResult = await axios(options);
        this.page += 1;
        return serchResult.data;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}