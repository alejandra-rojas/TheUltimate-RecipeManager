using recipeManagerBackend.Models;
namespace recipeManagerBackend.Services;

public interface IRecipeRepository
{
    Recipe? GetOne(string id);
    IEnumerable<Recipe> GetAll();
    Recipe Create(string name, int servings, string ingredients, string instructions, string? source, string image, string? comments);
    void Delete(string id);
    Recipe Update(string id, string name, int servings, string ingredients, string instructions, string? source, string image, string? comments);

}
