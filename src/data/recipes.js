const recipes =[
    {id:1, 
        title:"Chicken Alfredo", 
        category:"Dinner", 
        image:"../assets/images/chicken_alfredo.png", 
        description:"Creamy pasta with grilled chicken",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        ingredients: [
            "2 chicken breasts",
            "8 oz fettuccine pasta",
            "1 cup heavy cream",
            "1/2 cup grated Parmesan",
            "2 cloves garlic"],
        instructions: [
            "Cook the pasta according to the package directions.",
            "Season and cook the chicken until fully cooked.",
            "Prepare the cream sauce with garlic and Parmesan.",
            "Combine the pasta, chicken, and sauce.",
            "Serve while warm."]
    },
    {id:2, title:"Haitian Griot", category:"Caribbean", image:"../assets/images/griot.png", description:"Tradition Haitian fried pork"},
    {id:3, title:"Mango Smoothie", category:"Drinks", image:"../assets/images/mango_smoothie.png", description:"Fresh blended mango drink"},
    // {id:4, title:, category:, image:, description:},
    // {id:5, title:, category:, image:, description:}
];

export default recipes;