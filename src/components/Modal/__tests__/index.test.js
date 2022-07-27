import React from "react";
import {render, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mocktoggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);
describe('Modal components', ()=> {
    it('renders', ()=>{
        render(<Modal 
        mocktoggleModal={toggleModal}/>);
    });

    it('matches snapshots', ()=> {
        const {asFragment} = render (<Modal />)
        expect(asFragment()).toMatchSnapshot();
    })
})