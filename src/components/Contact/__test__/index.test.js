import React from "react";
import {render, cleanup} from "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';

import Contact from "./Contact";

afterEach(cleanup);

describe('Contact Renders', ()=> {
    it('renders', ()=> {
        render(<ContactForm />)
    });

    it('matches the DOM node structure', ()=> {
        const { asFragment } = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot();
    }) ;   
})

it('renders', ()=> {
    const {getByTestId} = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})