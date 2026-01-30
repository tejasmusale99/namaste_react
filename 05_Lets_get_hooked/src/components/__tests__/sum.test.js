import {sum} from "../sum"

test("calculate the sum of two number ", ()=>{
    const result = sum(2,3)

    //assertion
    expect(result).toBe(5)
})