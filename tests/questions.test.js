import { html_questions } from '../assets/js/html-questions';
import { js_questions } from '../assets/js/js-questions';
import { css_questions } from '../assets/js/css-questions';

describe('question tests', () => {
    test("Check html answer", () => {
        // Given question 
        const question = html_questions[0];

        // When get answer
        const correctAnswer = question.correctAnswer;

        // Then meets expected answer
        expect(correctAnswer).toBe("d");
    });

    test("Check js answer", () => {
        // Given question 
        const question = js_questions[0];

        // When get answer
        const correctAnswer = question.correctAnswer;

        // Then meets expected answer
        expect(correctAnswer).toBe("b");
    });

    test("Check css answer", () => {
        // Given question 
        const question = css_questions[0];

        // When get answer
        const correctAnswer = question.correctAnswer;

        // Then meets expected answer
        expect(correctAnswer).toBe("b");
    });
});