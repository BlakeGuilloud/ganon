/**
 * promisify takes an asynchronous function that uses node style callbacks
 *   and returns a function that will return a promise instead.
 *   const promisified = promisify(fn);
 * Invoking the original function (fn) may have looked something like this:
 *   fn((error, data) => {
 *     if (error) handleError();
 *     else doSomethingWith(data);
 *   });
 * Whereas the promisifed function (fn) would be used like this:
 *   promisifed()
 *     .then((data) => {
 *       doSomethingWith(data);
 *     })
 *     .catch((error) => {
 *       handleError();
 *     });
 * @param  {Function} fn aynchronous function to promisify
 * @return {Function}    function that will return a promise
 */
function promisify (fn) {
  // Your Code Here
}

module.exports = promisify;
