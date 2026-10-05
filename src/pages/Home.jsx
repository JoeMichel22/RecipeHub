import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipeList from "../components/RecipeList";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home(){
    return(
        <>
            <Navbar/>

            <main>
                <Hero/>

                <section className="recipe-section">
                    <h2>Featured Recipes</h2>

                    <RecipeList/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Home;