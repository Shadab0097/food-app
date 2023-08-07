import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestMenu from "../RestMenu"
import mockeMenu_data from "../mocks/RestmenuMock.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mockeMenu_data)
        }
    })
})

test("should update cart", async () => {
    await act(() => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <RestMenu />
            <Header/>
        </Provider>
        </BrowserRouter>
    ))

    const acoordianHeader = screen.getByText("Match Day Meal (4)")
    expect(acoordianHeader).toBeInTheDocument()
    fireEvent.click(acoordianHeader)
     console.log(acoordianHeader)

// const item = screen.getAllByTestId("foodItems")
    // const lengths = screen.getAllByTestId("foodItems")
    // console.log(item)
    
    // expect(item.length).toBe(4)

    // const addbtn = screen.getAllByTestId("btntest")
    // expect(addbtn).toBeInTheDocument()

    // fireEvent.click(addbtn[0])
    // expect(screen.getByText("Cart(1)").toBeInTheDocument())
})

