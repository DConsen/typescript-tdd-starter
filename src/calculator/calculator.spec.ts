import {Add} from "./calculator";

describe('Calculator', () => {
    it('should return 0 on empty string', () => {
        expect(Add('')).toBe(0);
    })
})