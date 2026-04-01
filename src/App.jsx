import React, { useState } from 'react';
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/Component/NavBar/BannerSection/Banner'
import NavBar from './assets/Component/NavBar/NavBar'
import ProductSections from './assets/Component/ProductSections/ProductSections'
import Review from './assets/Component/ReviewSection/Review'
import SelectedBtnSection from './assets/Component/SelectedBtnSection/SelectedBtnSection'
import SelectedProduct from './assets/Component/ProductSections/SelectedProduct/SelectedProduct';
import StepsSection from './assets/Component/StepsSection/StepsSection';
import TransparentPricing from './assets/Component/TransparentPricing/TransparentPricing';
import TransformWorkflow from './assets/Component/TransformWorkflow/TransformWorkflow';
import Footer from './assets/Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const fetchProducts = async () => {
  const res = await fetch("/Products.json")
  return res.json();
}
function App() {
  const ProductPromise = fetchProducts()
      const [availableType, setavailableType] = useState(false);
      const [selectedType, setSelectedType] = useState(true);
      const [selectedProduct, setSelectedProduct] = useState([]);

      // console.log(selectedType);
      // console.log(availableType);

      const handleAbailableData =() =>{
        setavailableType(false)
        setSelectedType(true)
      }
      const handleSelectedData =() =>{
        setavailableType(true)
        setSelectedType(false)
      }

  return (
    <>
      <NavBar selectedProduct={selectedProduct}></NavBar>
      <Banner></Banner>
      <Review></Review>
      <SelectedBtnSection sendAvailable ={handleAbailableData} senSelected={handleSelectedData} selectedType= {selectedType} availableType={availableType} selectedProduct={selectedProduct}></SelectedBtnSection>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} >
        {
          selectedType? <ProductSections ProductPromise={ProductPromise} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} ></ProductSections> : <SelectedProduct selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></SelectedProduct>
        }
      </Suspense>
      <StepsSection></StepsSection>
      <TransparentPricing></TransparentPricing>
      <TransformWorkflow></TransformWorkflow>
      <Footer></Footer>
      <ToastContainer />

     
    </>
  )
}

export default App
