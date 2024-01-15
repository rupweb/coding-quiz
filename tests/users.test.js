/**
 * @jest-environment jsdom
 */

import { userName, attachUserEventListeners } from '../assets/js/users.js'; 

describe('User Name Form Test', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="user-name-form">
                <input type="text" id="user-name" name="user-name" />
                <button type="submit">Submit</button>
            </form>
        `;

        attachUserEventListeners();
    });

    test('should update userName on form submit', () => {
        // Simulate form
        const input = document.getElementById('user-name');
        input.value = 'John Doe';

        // Simulate form submission
        const form = document.getElementById('user-name-form');
        form.dispatchEvent(new Event('submit'));

        // Assert that userName was updated correctly
        expect(userName).toBe('John Doe');
    });
});
