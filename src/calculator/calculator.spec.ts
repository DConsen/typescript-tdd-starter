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

    it('should return sum for any amount of comma seperated numbers', function () {
        expect(Add('1,2,3,4,')).toBe(10);
    });

    it('should return sum if seperated by newline', function () {
        expect(Add('1\n2')).toBe(3);
    });

    it('should return sum if seperated by newline and commas', function () {
        expect(Add('1\n2,3\n4')).toBe(10);
    });
})