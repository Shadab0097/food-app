import { fireEvent, render , screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Body from "../Body"
import MockData from "../mocks/RestbodyMock.json"
import "@testing-library/jest-dom"
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers"


global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MockData)
        }
    })
})

// test("shoul render body comoponent with search button",async()=>{
//     await act(async()=> render (
//         <BrowserRouter>
//         <Body/>
//         </BrowserRouter>
//     ))
//    const allrest = screen.getAllByTestId("restCardId")
//    expect(allrest.length).toBe(9)
//     const searchbtn = screen.getByTestId("btnId")

//     const searchInput = screen.getByTestId("searchinput")
//     fireEvent.change(searchInput , {target:{value : "pizza"}})
//     fireEvent.click(searchbtn)
    
//    const card = screen.getAllByTestId("restCardId")
//    expect(card.length).toBe(1)
// })

test("shoul render body comoponent with top rated button button",async()=>{
    await act(async()=> render (
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ))
   const allrest = screen.getAllByTestId("restCardId")
   expect(allrest.length).toBe(9)

   const ratedbutton = screen.getByRole('button',{name:"Rating"})
   fireEvent.click(ratedbutton)
   const afterclick = screen.getAllByTestId("restCardId")
   expect(afterclick.length).toBe(7)
    
})