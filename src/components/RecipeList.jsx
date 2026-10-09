import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";


function RecipeList({recipes}) {
    return(
        <div className="recipe-grid">
            {recipes.map(recipe => (
                <RecipeCard 
                    key= {recipe.id} 
                    recipe= {recipe}
                />)
            )}
        </div>
    );
}
