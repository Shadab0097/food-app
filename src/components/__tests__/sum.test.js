import { sum } from "../sum"

test("sumof two number", ()=>{
    const result = sum(3,2)
    expect(result).toBe(5)
});