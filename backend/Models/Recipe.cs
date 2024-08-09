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
    public string? Image { get; set; }
    public string? Comments { get; set; }
    public int Rating { get; set; } = 0;

}
