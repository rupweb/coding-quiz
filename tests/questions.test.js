import { htmlQuestions } from '../assets/js/html-questions';
import { jsQuestions } from '../assets/js/js-questions';
import { cssQuestions } from '../assets/js/css-questions';

describe('question tests', () => {
    test("Check html answer", () => {
        // Given question 
        const question = htmlQuestions[0];

        // When get answer
        const correctAnswer = question.correctAnswer;

        // Then meets expected answer
        expect(correctAnswer).toBe("d");
    });

    test("Check js answer", () => {
        // Given question 
        const question = jsQuestions[0];

        // When get answer
        const correctAnswer = question.correctAnswer;

        // Then meets expected answer
        expect(correctAnswer).toBe("b");
    });

    test("Check css answer", () => {
        // Given question 
        const question = cssQuestions[0];

        // When get answer
        const correctAnswer = question.correctAnswer;

        // Then meets expected answer
        expect(correctAnswer).toBe("b");
    });
});