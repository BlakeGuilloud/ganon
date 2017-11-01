/**
 * @description
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
  let args, callback, timeoutIdentifier;
  let last = 0;

  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }

  if (typeof wait !== "number") {
    throw new TypeError("Expected a number");
  }

  return function() {
    args = arguments;
    let timeSinceLastCall = new Date() - last;
    let timeUntilNextCall = wait - timeSinceLastCall;
    let shouldCall = timeSinceLastCall >= wait;
    if (typeof timeoutIdentifier === "undefined") {
      if (shouldCall) call.bind(this)();
      else timeoutIdentifier = setTimeout(call.bind(this), timeUntilNextCall);
    }
    return callback;
  };

  function call() {
    timeoutIdentifier = undefined;
    last = new Date().getTime();
    callback = fn.apply(this, args);
  }
}

module.exports = throttle;
