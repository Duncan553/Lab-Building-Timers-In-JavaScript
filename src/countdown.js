// countdown.js
// A simple countdown timer that calls a callback every second until 0

function countdownTimer(seconds, callback) {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    // Call callback first
    callback(remaining);

    // Decrement remaining
    remaining--;

    // Stop timer after reaching -1
    if (remaining < 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  return intervalId; // Return interval ID for possible manual clearing
}

// Export with CommonJS for Jest
module.exports = { countdownTimer };
