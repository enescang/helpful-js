import {sum} from '../src/helpful-js';

describe('test the all config variables', () => {
    test('two plus two is four', () => {
        const t = sum(3);
        expect(t).toBe(4);
    });
});