using System.ComponentModel.DataAnnotations;
namespace recipeManagerBackend.Models;

public class Recipe
{
    [Key]
    public string Id { get; init; } = "recipe_" + Guid.NewGuid().ToString().Replace("-", "");
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string? CreationSource { get; set; }
    public required string Name { get; set; }
    public required int Servings { get; set; }
    public required string Ingredients { get; set; }
    public required string Instructions { get; set; }
    public string? Source { get; set; }
    public string ImgURL { get; set; } = "https://placehold.co/600x400/f1f1f1/ffffff?text=img";
    public string? Comments { get; set; }
    public int Rating { get; set; } = 0;
    public RecipeType RecipeType { get; set; }
    public List<DietaryKey> DietKeys { get; set; } = new();

}

public enum RecipeType
{
    BreakfastAndBrunch,
    Bites,
    Cupboard,
    Mains,
    Desserts,
    Salads,
    SaucesAndDips,
    Sides,
    Snacks,
    SoupsAndStews,
    Sweets,
}


public enum DietaryKey
{
    cold,
    glutenFree,
    hot,
    nuts,
    spicy,
    vegan,
    vegetarian
}

