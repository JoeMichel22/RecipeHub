import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipeList from "../components/RecipeList";
import Footer from "../components/Footer";
import Search from "../components/Search";

import { useState } from "react";
import recipes from "../data/recipes";

import "../styles/Home.css";

function Home(){

    const [searchTerm, setSearchTerm] = useState("");

    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(Search.toLowerCase()) );

    return(
        <>
            <Navbar/>

            <main>
                <Hero/>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

                <section className="recipe-section">
                    <h2>Featured Recipes</h2>

                    <RecipeList recipes={filteredRecipes}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Home;
