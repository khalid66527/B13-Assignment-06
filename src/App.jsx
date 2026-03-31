
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/Component/NavBar/BannerSection/Banner'
import NavBar from './assets/Component/NavBar/NavBar'
import ProductSections from './assets/Component/ProductSections/ProductSections'
import Review from './assets/Component/ReviewSection/Review'
import SelectedBtnSection from './assets/Component/SelectedBtnSection/SelectedBtnSection'

const fetchProducts = async () => {
  const res = await fetch("/Products.json")
  return res.json();
}
function App() {
  const ProductPromise = fetchProducts()

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Review></Review>
      <SelectedBtnSection></SelectedBtnSection>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} >
        <ProductSections ProductPromise={ProductPromise} ></ProductSections>

      </Suspense>
    </>
  )
}

export default App
