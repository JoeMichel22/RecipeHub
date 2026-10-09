function RecipeList({recipes}) {
    recipes.map(recipe => (
        <RecipeCard 
            key= {recipe.id} 
            recipe= {recipe}
        />)
    );
}
