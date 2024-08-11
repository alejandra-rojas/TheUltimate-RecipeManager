using System.ComponentModel.DataAnnotations;

namespace recipeManagerBackend.Models;

public record AddRecipeRequest(
    [Required] string Name,
    [Required] int Servings,
    [Required] string Ingredients,
    [Required] string Instructions
);



