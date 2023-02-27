import { sum } from "./index";

describe('sum module', () => {
    it('test sun', () => {
        expect(sum(1, 2)).toBe(3)
    })

    it('test sun rree', () => {
        expect(sum(1, 1)).toBe(2)
    })
})