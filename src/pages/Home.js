import React from "react";
import "../App.css"
import HeroSection from "../components/HeroSection"
import Products from "../components/Products"
import Desserts from "../components/Desserts"
import Drinks from "../components/Drinks"
import Speciality from '../components/Speciality'
import Footer from '../components/Footer'
import { ramenData, dessertData, drinksData } from '../components/data';

function Home() {
  return (
    <>
      <HeroSection />
      <Products heading={'Choose your FAVORITE'} data={ramenData}/>
      <Speciality/>
      <Desserts heading={'Sweet Treats for YOU'} data={dessertData}/>
      <Drinks heading={'Beverages from HEAVEN'} data={drinksData}/>
      <Footer/>
    </>
  );
}

export default Home;