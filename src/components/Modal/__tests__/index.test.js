import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
import { fireEvent } from "@testing-library/react";

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal components', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto} 
            />);
    });

    it('matches snapshots', () => {
        const {asFragment} = render (<Modal 
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        
        />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        //Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        // Act: Simulate click event 
        fireEvent.click(getByText('Close this modal'))

        //Assert: Expected matcher
        expect(mocktoggleModal).toHaveBeenCalledTimes(1);
    });

})