import {Add} from "./calculator";

describe('Calculator', () => {
    it('should return 0 on empty string', function () {
        expect(Add('')).toBe(0);
    });

    it('should return self when only number', function () {
        expect(Add('3')).toBe(3);
    });

    it('should return sum when two numbers seperated by comma', function () {
        expect(Add('3,4')).toBe(7);
    });
})