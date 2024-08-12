using recipeManagerBackend.Models;

namespace recipeManagerBackend.Services;

public static class DatabaseSeeder
{
    public static IApplicationBuilder SeedDatabase(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();

        var dbContext = serviceScope.ServiceProvider.GetService<AppDbContext>()!;
        var logger = serviceScope.ServiceProvider.GetService<ILogger<AppDbContext>>()!;

        dbContext.Database.EnsureCreated();

        if (!dbContext.Recipes.Any())
        {
            logger.LogInformation("Adding recipes to the empty database");
            dbContext.Recipes.AddRange([
              new Recipe
        {
            Id = "recipe_2f81a686753111e886e5f0d5bf731f68",
            Name = "Cucumber and wakame seaweed salad",
            ImgURL = "https://pickledplum.com/wp-content/uploads/2019/08/Japanese-cucumber-salad-3-1200.jpg",
            Servings = 4,
            Ingredients = "2 Tbsp dried Wakame seaweed, 2 Japanese or 3 Persian cucumbers, 1/4 tsp salt, 3 Tbsp rice vinegar, 1 Tbsp sugar, 1/4 tsp soy sauce, 1/2 tsp sesame oil (optional), 1 tsp sesame seeds",
            Instructions = "Hydrate dried Wakame seaweed in water for 10 minutes. Drain water and squeeze water out from Wakame. Slice cucumbers as thin as you can. Stir in salt, and let sit for 5 minutes. Squeeze water out from cucumbers. In a small bowl, mix rice vinegar, sugar, soy sauce, and sesame oil together until sugar dissolves. Add vinegar mixture and sesame seeds to prepared cucumbers and Wakame and mix well.",
            RecipeType = RecipeType.Salads,
            DietKeys = [DietaryKey.cold, DietaryKey.vegetarian]

        },
        new Recipe
        {
            Id = "recipe_f9ce325ded8c4fad899bfc997ed199ad",
            Name = "Dan dan noodles",
            ImgURL = "https://images.themodernproper.com/billowy-turkey/production/posts/DanDanNoodles_9.jpg?w=600&q=82&auto=format&fit=crop&dm=1707774158&s=212fb4045fd629b6f910a0dc0c7ac6c9",
            Servings = 4,
            Ingredients = "500g mince chicken, 1 tbsp ground black pepper, Light soy sauce to taste, A couple drops of sesame oil",
            Instructions = "In a large pan, add cooking oil. When the oil is hot: Add mince chicken and pepper. Saute until golden brown. Season with light soy sauce to taste and a couple drops of sesame oil. Transfer to a plate and keep warm.",
            RecipeType = RecipeType.SoupsAndStews,
            DietKeys = [DietaryKey.spicy, DietaryKey.vegan]
        },
        new Recipe
        {
            Id = "recipe_b769d25a86dc4ec6a022dfa4112354f9",
            Name = "Salsa Macha",
            ImgURL = "https://keviniscooking.com/wp-content/uploads/2022/09/Salsa-Macha-square-1000x1000.jpg",
            Servings = 250,
            Ingredients = "20 gr. Chile de árbol seco, 60 gr. Chile morita, 1/3 tza. Cacahuate sin sal, 150 gr. Aceite de oliva, 2 dientes Ajo, 1 cdta. Sal de grano, 2 cdas. Semillas de ajonjolí, 1 cda. Azúcar morena, 1 1/2 cdas. Vinagre blanco",
            Instructions = "Preparar esta salsa es un proceso muy sencillo solamente necesitas freír y licuar los ingredientes básicamente.",
            Source = "https://www.vivalacocina.com/salsa-macha-salsa-de-chile-morita-y-chile-de-arbol/",
            RecipeType = RecipeType.SaucesAndDips,
            DietKeys = [DietaryKey.spicy, DietaryKey.nuts, DietaryKey.glutenFree]
        },
        new Recipe
        {
            Name = "Mabo Don",
            Servings = 4,
            ImgURL = "https://assets.epicurious.com/photos/63209959586679e44171fd5b/1:1/w_2560%2Cc_limit/Mabo%2520Don%25E2%2580%2594RECIPE.jpg",
            Ingredients = "20 gr. Chile de árbol seco, 60 gr. Chile morita, 1/3 tza. Cacahuate sin sal, 150 gr. Aceite de oliva, 2 dientes Ajo, 1 cdta. Sal de grano, 2 cdas. Semillas de ajonjolí, 1 cda. Azúcar morena, 1 1/2 cdas. Vinagre blanco",
            Instructions = "Preparar esta salsa es un proceso muy sencillo solamente necesitas freír y licuar los ingredientes básicamente.",
            RecipeType = RecipeType.Mains,
            DietKeys = [DietaryKey.vegan]
        },
      ]);
            dbContext.SaveChanges();
        }

        return app;
    }
}