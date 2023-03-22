"use strict";

var _exercise = _interopRequireDefault(require("./exercise-3.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(async () => {
  console.log(await _exercise.default.fetchJoke('GME'));
  // console.log(await _exercise2.fetchRandomJoke());
})();

// import _exercise2 from './exercise-3.js';

// (async () => {
//     // console.log(await icanhazdadjoke.getJokeById('xc21Lmbxcib'));
//     console.log(await _exercise2.fetchJoke('xc21Lmbxcib'));
// })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiX2V4ZXJjaXNlMyIsImZldGNoSm9rZSJdLCJzb3VyY2VzIjpbIi4uL2pzL3J1bi0zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXhlcmNpc2UzIGZyb20gJy4vZXhlcmNpc2UtMy5qcyc7XG5cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYXdhaXQgX2V4ZXJjaXNlMy5mZXRjaEpva2UoJ0dNRScpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhd2FpdCBfZXhlcmNpc2UyLmZldGNoUmFuZG9tSm9rZSgpKTtcbn0pKCk7XG5cbi8vIGltcG9ydCBfZXhlcmNpc2UyIGZyb20gJy4vZXhlcmNpc2UtMy5qcyc7XG5cbi8vIChhc3luYyAoKSA9PiB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coYXdhaXQgaWNhbmhhemRhZGpva2UuZ2V0Sm9rZUJ5SWQoJ3hjMjFMbWJ4Y2liJykpO1xuLy8gICAgIGNvbnNvbGUubG9nKGF3YWl0IF9leGVyY2lzZTIuZmV0Y2hKb2tlKCd4YzIxTG1ieGNpYicpKTtcbi8vIH0pKCk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBeUM7QUFFekMsQ0FBQyxZQUFZO0VBQ1RBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU1DLGlCQUFVLENBQUNDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUM5QztBQUNKLENBQUMsR0FBRzs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSJ9