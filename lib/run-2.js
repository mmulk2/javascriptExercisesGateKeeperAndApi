"use strict";

var _exercise = _interopRequireDefault(require("./exercise-2.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import _exercise2 from './exercise-2.js';

/* (async () => {
       console.log(await _exercise2.fetchJoke('xc21Lmbxcib'));
       // console.log(await _exercise2.fetchRandomJoke());
   })(); */

(async () => {
  // console.log(await icanhazdadjoke.getJokeById('xc21Lmbxcib'));
  console.log(await _exercise.default.fetchRandomJoke());
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiX2V4ZXJjaXNlMiIsImZldGNoUmFuZG9tSm9rZSJdLCJzb3VyY2VzIjpbIi4uL2pzL3J1bi0yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBfZXhlcmNpc2UyIGZyb20gJy4vZXhlcmNpc2UtMi5qcyc7XG5cbi8qIChhc3luYyAoKSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coYXdhaXQgX2V4ZXJjaXNlMi5mZXRjaEpva2UoJ3hjMjFMbWJ4Y2liJykpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IF9leGVyY2lzZTIuZmV0Y2hSYW5kb21Kb2tlKCkpO1xuICAgfSkoKTsgKi9cblxuaW1wb3J0IF9leGVyY2lzZTIgZnJvbSAnLi9leGVyY2lzZS0yLmpzJztcblxuKGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhhd2FpdCBpY2FuaGF6ZGFkam9rZS5nZXRKb2tlQnlJZCgneGMyMUxtYnhjaWInKSk7XG4gICAgY29uc29sZS5sb2coYXdhaXQgX2V4ZXJjaXNlMi5mZXRjaFJhbmRvbUpva2UoKSk7XG59KSgpO1xuIl0sIm1hcHBpbmdzIjoiOztBQU9BO0FBQXlDO0FBUHpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLENBQUMsWUFBWTtFQUNUO0VBQ0FBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU1DLGlCQUFVLENBQUNDLGVBQWUsRUFBRSxDQUFDO0FBQ25ELENBQUMsR0FBRyJ9