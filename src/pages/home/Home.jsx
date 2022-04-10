import React ,{ useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer, RecipeCard } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";


const APP_ID = "cf9b1911";
const APP_KEY = "595aeb2b3a15df30d34b8d8aa5c2cb7b";

const Home = () => {

  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast","Lunch","Dinner","Snack","Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());



  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async() => {
    if(query){
      const result = await axios.get(url);
      setFood(result.data.hits);
    } else {
      console.log("Please fill the form");
    }
  }
console.log(food);
  return (
    <div>
    <Header setQuery={setQuery}
                getData={getData}
                mealTypes={mealTypes}
                setMeal={setMeal}
    />
    {food ? (
      <MainContainer>
        {food.map((liste , index) => (
          <RecipeCardComp key={index} recipe1={liste.recipe} />
        ) )}
      </MainContainer>
    ) : (
      <ImgDiv>
        <HomeImg src={homeSvg} />
      </ImgDiv>
    )}
  </div>
  )};

export default Home;
