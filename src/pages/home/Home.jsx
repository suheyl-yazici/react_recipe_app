import React from "react";
import Header from "../../components/header/Header";
import axios from "axios";

const APP_ID = "cf9b1911";
const APP_KEY = "595aeb2b3a15df30d34b8d8aa5c2cb7b";

const Home = () => {


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async() => {
    const result = await axios.get(url);
    console.log(result);
  }

  return <Header />;
};

export default Home;
