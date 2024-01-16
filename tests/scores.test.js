import { mergeScores } from '../assets/js/scores.js';

describe('Json tests', () => {
    test("Check json string merges", () => {
        // Given json
        var json1 = '{"test1": 10}';
        var json2 = '{"test2": 40}';

        // When merge
        var mergedJson = mergeScores(json1, json2);

        // Then expect
        expect(mergedJson).toBe('{"test1":10,"test2":40}');
    });

    test("Handle empty object", () => {
        // Given json
        var json1 = '{}';
        var json2 = '{"test2": 40}';

        // When merge
        var mergedJson = mergeScores(json1, json2);

        // Then expect
        expect(mergedJson).toBe('{"test2":40}');
    });
});