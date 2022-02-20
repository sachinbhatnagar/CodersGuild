const favoriteRecipe = {
  recipeTitle: "Sandwich",
  servings: 3,
  ingredients: ["Bread", "Potato", "Onion", "Oil"],
  directions: "Buy bread and go make a Sandwich",
  letsCook: function () {
    console.log(`I’m hungry! Let’s make a ${favoriteRecipe.recipeTitle}`);
  },
};

favoriteRecipe.ingredients.forEach((item) => {
  console.log(item);
});
favoriteRecipe.letsCook();
