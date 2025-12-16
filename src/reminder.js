/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Parameters:
 * - message (string): The message to log
 * - delay (number): Delay in milliseconds
 *
 * Returns:
 * - Promise that resolves after the message is logged
 */
function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };
