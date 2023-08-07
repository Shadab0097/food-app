import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("shouls load the comoponent",()=>{
    render(<Contact/>)
    const head = screen.getByRole("heading")
    expect(head).toBeInTheDocument()
})

test("should have button inside component",()=>{
    render(<Contact/>)
     const button = screen.getByRole("button")
     expect(button).toBeInTheDocument()
})