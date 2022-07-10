import React from "react";
import PhotoList from '../';
import { capitalizeFirstLetter } from '../../utils/helpers';

// we must use Hooks to trigger re-render an a variable change


function Gallery({ currentCategory} ) {
   const { name, description } = currentCategory;
    
    return (
        <section>

            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name}/>

        </section>
    );
}
export default Gallery;
