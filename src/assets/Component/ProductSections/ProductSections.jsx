import React, { use } from 'react';
import AvailableProduct from './AvailableProduct/AvailableProduct';

const ProductSections = ({ProductPromise}) => {
    console.log(ProductPromise);
    const Productdata=use(ProductPromise)
    console.log(Productdata);

    return (
        <div className='container mx-auto'>
            <p>Porducts : {Productdata.length}</p>
            <AvailableProduct Productdata ={Productdata}></AvailableProduct>
        </div>
    );
};

export default ProductSections;