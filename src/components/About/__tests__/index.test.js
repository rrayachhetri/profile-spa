import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";
afterEach(cleanup);
//  we won't have any leftover memory data that could give us false results.
describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About />);
    });

    //second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
    //expect function with a matcher to assert something about a value

})
