function RecipeCard({recipe}){
    return(
        <div>
            <img src= {recipe.image}/>

            <h3>{recipe.title}</h3>

            <p>{recipe.description}</p>
        </div>
    )
}

export default RecipeCard;