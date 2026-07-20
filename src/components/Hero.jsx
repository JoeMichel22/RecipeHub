import "../styles/Hero.css"
import heroImage from "../assets/images/recipelanding.png"

function Hero(){

    return(
        <section className="hero">
            
            <img src={heroImage} alt="Delicious food"/> 

            <div className="hero-content">
                
                <h1>Discover Delicious Recipes</h1>

                <p>Explore meals, drinks, and recipes from around the world</p>

                <button>Explore Recipes</button>

            </div>
        </section>
    );

}

export default Hero;