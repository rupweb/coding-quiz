/**
 * @jest-environment jsdom
 */

import { startTimer, isTimerCompleted } from '../assets/js/timer.js';
import { sleep } from './utils.js';


describe('timer tests', () => {

  // A bit of an asynchronous test using an async sleep
  test('check timer finishes and sets timer complete', async () => {

    // Timer test
    startTimer(1, () => {
      console.log('Timer finished!');
    });

    // The sleep is async so await it
    await sleep(1200);
    
    expect(isTimerCompleted()).toBe(true);
  });
});