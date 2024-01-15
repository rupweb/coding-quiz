import { sleep } from './utils.js';

describe('sleep function tests', () => {
  test('sleeps for the specified duration', async () => {
    const duration = 1000; // 1 second
    const allowedDeviation = 100; // 100ms deviation

    const startTime = new Date().getTime();
    await sleep(duration);
    const endTime = new Date().getTime();

    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(duration);
    expect(elapsedTime).toBeLessThanOrEqual(duration + allowedDeviation);
  });
});