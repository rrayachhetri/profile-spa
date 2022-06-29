import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from "..";

afterEach(cleanup);

decribe('Gallery Component', ()=> {
    it('renders', ()=> {
        render(<Gallery />);
    });

    it('matches code Snapshot', ()=> {
        const { asFragment } = render(<Gallery />);
        expect(asFragment()).toMatchSnapshot();
    });
})