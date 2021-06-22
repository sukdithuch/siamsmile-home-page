import React, { useState } from "react";
import './App.css';
import Layout from './components/Layout/Layout';
import BlogSection from './components/Section/BlogSection';
import CategorySection from './components/Section/CategorySection';
import HeroSection from './components/Section/HeroSection';
import InfoSection from './components/Section/InfoSection';
import LargeImgSection from './components/Section/LargeImgSection';
import OffersSection from './components/Section/OffersSection';
import ProductSection from './components/Section/ProductSection';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    console.log("existingItem", existingItem);
    console.log("cartItems", cartItems);
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem.quantity === 1) {
      setCartItems(
        cartItems.find((item) => item.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...existingItem, quantity: existingItem.quantity - 1 } : item,
        )
      );
    }
  }


  return (
    <>
      <Layout countCartItems={cartItems.length}>
        <HeroSection />
        <CategorySection />
        <LargeImgSection />
        <OffersSection addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
        <InfoSection />
        <ProductSection addToCart={addToCart} />
        <BlogSection />
      </Layout>
    </>
  );
}

export default App;
