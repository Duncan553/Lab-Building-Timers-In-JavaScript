/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Parameters:
 * - message (string): Message to log
 * - interval (number): Interval in milliseconds
 *
 * Returns:
 * - timerId: ID of the setInterval timer
 */
function recurringTimer(message, interval) {
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  return timerId;
}

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its timer ID
 */
function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
