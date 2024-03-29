"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isotropicError = _interopRequireDefault(require("isotropic-error"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _exercise2 = {
  baseUrl: 'https://icanhazdadjoke.com',
  async fetchJoke(id) {
    try {
      const res = await fetch(`${this.baseUrl}/j/${id}`, {
        headers: this.headers
      });
      if (!res.ok) {
        throw new _isotropicError.default(`Error: ${res.status} - ${res.statusText}`);
      }
      let fetchJokesData = await res.json();
      return `${fetchJokesData.id}: \t ${fetchJokesData.joke}`;
    } catch (err) {
      throw new _isotropicError.default(`Error while fetching joke with ID: ${id} - ${err}`);
    }
  },
  async fetchRandomJoke() {
    try {
      const res = await fetch(`${this.baseUrl}/`, {
        headers: this.headers
      });
      if (!res.ok) {
        throw new _isotropicError.default(`Error: ${res.status} - ${res.statusText}`);
      }
      let getData = await res.json();
      return `${getData.id}: \t ${getData.joke}`;
    } catch (err) {
      throw new _isotropicError.default(`Error while fetching random joke: ${err}`);
    }
  },
  headers: {
    Accept: 'application/json'
  },
  async searchForJokesWith(term) {
    try {
      const dict = {},
        res = await fetch(`${this.baseUrl}/search?term=${term}`, {
          headers: this.headers
        });
      if (!res.ok) {
        throw new _isotropicError.default(`Error: ${res.status} - ${res.statusText}`);
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
      throw new _isotropicError.default(`Error while searching for jokes: ${err}`);
    }
  }
};
var _default = _exercise2;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhlcmNpc2UyIiwiYmFzZVVybCIsImZldGNoSm9rZSIsImlkIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJfRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZmV0Y2hKb2tlc0RhdGEiLCJqc29uIiwiam9rZSIsImVyciIsImZldGNoUmFuZG9tSm9rZSIsImdldERhdGEiLCJBY2NlcHQiLCJzZWFyY2hGb3JKb2tlc1dpdGgiLCJ0ZXJtIiwiZGljdCIsImdldFNlYXJjaEpva2VzRGF0YSIsInN0ciIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZGEiLCJwIiwidmFsIiwiT2JqZWN0IiwiZW50cmllcyJdLCJzb3VyY2VzIjpbIi4uL2pzL2V4ZXJjaXNlLTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9FcnJvciBmcm9tICdpc290cm9waWMtZXJyb3InO1xuXG5jb25zdCBfZXhlcmNpc2UyID0ge1xuICAgIGJhc2VVcmw6ICdodHRwczovL2ljYW5oYXpkYWRqb2tlLmNvbScsXG4gICAgYXN5bmMgZmV0Y2hKb2tlIChpZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9qLyR7aWR9YCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IF9FcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c30gLSAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmV0Y2hKb2tlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7ZmV0Y2hKb2tlc0RhdGEuaWR9OiBcXHQgJHtmZXRjaEpva2VzRGF0YS5qb2tlfWA7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IF9FcnJvcihgRXJyb3Igd2hpbGUgZmV0Y2hpbmcgam9rZSB3aXRoIElEOiAke2lkfSAtICR7ZXJyfWApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaFJhbmRvbUpva2UgKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS9gLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgX0Vycm9yKGBFcnJvcjogJHtyZXMuc3RhdHVzfSAtICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBnZXREYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGAke2dldERhdGEuaWR9OiBcXHQgJHtnZXREYXRhLmpva2V9YDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgX0Vycm9yKGBFcnJvciB3aGlsZSBmZXRjaGluZyByYW5kb20gam9rZTogJHtlcnJ9YCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGFzeW5jIHNlYXJjaEZvckpva2VzV2l0aCAodGVybSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGljdCA9IHt9LFxuICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybH0vc2VhcmNoP3Rlcm09JHt0ZXJtfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IF9FcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c30gLSAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZ2V0U2VhcmNoSm9rZXNEYXRhID0gYXdhaXQgcmVzLmpzb24oKSxcbiAgICAgICAgICAgICAgICBzdHIgPSAnJztcblxuICAgICAgICAgICAgZ2V0U2VhcmNoSm9rZXNEYXRhLnJlc3VsdHMuZm9yRWFjaChkYSA9PiB7XG4gICAgICAgICAgICAgICAgZGljdFtkYS5pZF0gPSBkYS5qb2tlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgW3AsIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZGljdCkpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gYCR7cH06IFxcdCAke3ZhbH1cXG5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBfRXJyb3IoYEVycm9yIHdoaWxlIHNlYXJjaGluZyBmb3Igam9rZXM6ICR7ZXJyfWApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgX2V4ZXJjaXNlMjtcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFxQztBQUVyQyxNQUFNQSxVQUFVLEdBQUc7RUFDZkMsT0FBTyxFQUFFLDRCQUE0QjtFQUNyQyxNQUFNQyxTQUFTLENBQUVDLEVBQUUsRUFBRTtJQUNqQixJQUFJO01BQ0EsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFLElBQUksQ0FBQ0osT0FBUSxNQUFLRSxFQUFHLEVBQUMsRUFBRTtRQUMvQ0csT0FBTyxFQUFFLElBQUksQ0FBQ0E7TUFDbEIsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFD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