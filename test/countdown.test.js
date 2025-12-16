// countdown.test.js
const { countdownTimer } = require('../src/countdown');

jest.useFakeTimers(); // Use fake timers for testing

describe('countdownTimer', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn(); // Mock callback function
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset mock calls
  });

  test('should call callback with remaining time and stop at 0', () => {
    const startTime = 5; // Countdown from 5 seconds
    countdownTimer(startTime, mockCallback);

    // Fast-forward all timers
    jest.advanceTimersByTime(startTime * 1000);

    // Run any pending timer to ensure last tick executes
    jest.runOnlyPendingTimers();

    // Check callback call count
    expect(mockCallback).toHaveBeenCalledTimes(startTime + 1); // 6 calls (5 → 0)

    // Verify callback received correct countdown values
    for (let i = 0; i <= startTime; i++) {
      expect(mockCallback).toHaveBeenCalledWith(startTime - i);
    }
  });
});
