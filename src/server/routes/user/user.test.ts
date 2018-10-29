import { testFunction } from 'server/routes';

describe('basic test', () => {
    it('try basic test', () => {
        const test = testFunction();
        expect(test).toBe(2);
    });
});
