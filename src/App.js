import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("Abhishek kumar sharma");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "5d00f2f7";
  const APP_KEY = "37b65c2dd868912ee75212d060dbc3c5	";

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
