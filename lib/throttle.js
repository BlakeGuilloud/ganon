/**
 * Throttle takes a callback function and wait time (ms) and
 *   returns a throttled version of the callback.
 *   A throttled function can only invoke the original callback
 *   as frequently as is specified by the 'wait' argument.
 * Considerations:
 *   The throttled function will invoke the callback immediately
 *     if it is being called for the first time or more than {wait}ms
 *     has elapsed since the last call.
 *   The function will postpone a second call until {wait}ms has
 *     elapsed since the previous call.
 *   Multiple subsequent calls during the same timeout period will
 *     result in only the most recent being postponed; all others
 *     will be ignored.
 * @param  {Function} fn   callback function
 * @param  {Number}   wait max frequency in ms
 * @return {Function}      the throttled function
 */
function throttle (fn, wait) {
  // Your Code Here
}

module.exports = throttle;
