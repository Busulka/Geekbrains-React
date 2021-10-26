import {render, screen} from "@testing-library/react";
import {Message} from "./Message";

describe("Message", () => {

    it("should contain message text 'Hello'", () => {
        render(<Message author="Bot" text="Hello there" />)

        const greeting = screen.getByText(/Hello/i)

        expect(greeting).toBeInTheDocument()
    })
})