import AvailableProduct from "../ProductSections/AvailableProduct/AvailableProduct";


const SelectedBtnSection = ({selectedType  ,sendAvailable ,senSelected ,availableType ,selectedProduct}) => {
  

    // console.log(selectedType);

    return (
        <div className='container mx-auto flex flex-col items-center py-8 space-y-4'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='text-gray-400'>
                Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity
            </p>

            <div className="flex ">
                <button
                    onClick={sendAvailable}
                    className={`btn rounded-2xl ${selectedType  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-gray-200"} `}
                >
                    Products
                </button>
                <button
                    onClick={senSelected}
                    className={`btn rounded-2xl ${availableType  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-gray-200"} `}

                >
                    Cart ({selectedProduct.length})
                </button>
            </div>
               
        </div>
    );
};

export default SelectedBtnSection;