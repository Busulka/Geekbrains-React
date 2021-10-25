import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Form} from "./Form";


describe('form tests', () => {

    it("should render the basic fields", () => {
        render(<Form />);
        expect(screen.getByPlaceholderText(/Write your message here/i)).toBeInTheDocument();
    });

    it('form submit test', () => {
        const onSubmitFn = jest.fn();
        render(<Form onSubmit={onSubmitFn} />);

        fireEvent.change(screen.getByPlaceholderText(/Write your message here/i), { target: { value: 'Lorem' } });
        fireEvent.submit(screen.getByTestId("form"));
        expect(onSubmitFn).toHaveBeenCalled();
    });
});