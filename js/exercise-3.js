import _Error from 'isotropic-error';

const _exercise3 = {
    baseUrl: 'https://api.tdameritrade.com',
    async fetchJoke (id) {
        try {
            const res = await fetch(`${this.baseUrl}/v1/marketdata/GOOG/quotes`, {
                headers: this.headers
            });

            console.log(res);

            if (!res.ok) {
                throw new _Error(`Error: ${res.status} - ${res.statusText}`);
            }

            let fetchJokesData = await res.json();

            return `${fetchJokesData.id}: \t ${fetchJokesData.joke}`;
        } catch (err) {
            throw new _Error(`Error while fetching joke with ID: ${id} - ${err}`);
        }
    },
    async fetchRandomJoke () {
        try {
            const res = await fetch(`${this.baseUrl}/`, {
                headers: this.headers
            });

            if (!res.ok) {
                throw new _Error(`Error: ${res.status} - ${res.statusText}`);
            }

            let getData = await res.json();

            return `${getData.id}: \t ${getData.joke}`;
        } catch (err) {
            throw new _Error(`Error while fetching random joke: ${err}`);
        }
    },
    headers: {
        Accept: 'application/json'
    },
    async searchForJokesWith (term) {
        try {
            const dict = {},
                res = await fetch(`${this.baseUrl}/search?term=${term}`, {
                    headers: this.headers
                });

            if (!res.ok) {
                throw new _Error(`Error: ${res.status} - ${res.statusText}`);
            }

            let getSearchJokesData = await res.json(),
                str = '';

            getSearchJokesData.results.forEach(da => {
                dict[da.id] = da.joke;
            });

            for (const [p, val] of Object.entries(dict)) {
                str += `${p}: \t ${val}\n`;
            }

            return str;
        } catch (err) {
            throw new _Error(`Error while searching for jokes: ${err}`);
        }
    }
};

export default _exercise3;

