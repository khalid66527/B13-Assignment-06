import React from 'react';
import Img from"../../../products/rocket.png"
const SelectedProduct = ({ selectedProduct ,setSelectedProduct}) => {
    // console.log(selectedProduct ,"selectedProduct");
    const handleDeleteSelectProduct = (Product)=>{

        console.log(Product);
        const filteradProduct = selectedProduct.filter(selectDeleteProduct=> selectDeleteProduct.name != Product.name)
        setSelectedProduct(filteradProduct)

    }
    return (
        <div className='container mx-auto' >
            <h1 className=' text-3xl font-bold'>Your Cart</h1>
            {
                selectedProduct.map((Product ,index) => {
                    console.log(Product);

                        return (
                        <div className="flex justify-between mb-4 bg-gray-50 rounded-2xl items-center border p-8" key={index}>
                            <div className="flex items-center gap-3">
                                <img src={Img} alt="Img" />
                                <div className="">
                                    <h2 className='font-bold text-2xl'>{Product.name} </h2>
                                    <p className=' text-2xl'>${Product.price} / {Product.period}</p>
                                </div>
                            </div>
                            <div className="">
                                <button className='btn text-red-500 text-xl' onClick={()=>handleDeleteSelectProduct(Product)}>Remove</button>
                            </div>
                        </div>
                    )


                })
            }
            <div className="my-10">
                <div className=" flex justify-between p-5 bg-gray-50">
                    <h2 className='text-3xl font-semibold'>Total</h2>
                    <span className='text-3xl font-bold'>000000</span>
                </div>
                <button className='btn text-2xl py-7 rounded-2xl w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white '>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default SelectedProduct;