using Microsoft.EntityFrameworkCore;
using recipeManagerBackend.Models;

namespace recipeManagerBackend.Services;

public class RecipeRepository(AppDbContext context) : IRecipeRepository
{

    private readonly AppDbContext _context = context;
    private DbSet<Recipe> _recipes => _context.Recipes;

    public Recipe Create(string name, int servings, string ingredients, string instructions, string? source, string image, string? comments)
    {
        var recipe = new Recipe
        {
            Name = name,
            Servings = servings,
            Ingredients = ingredients,
            Instructions = instructions,
            Source = source,
            ImgURL = image,
            Comments = comments
        };

        _recipes.Add(recipe);
        _context.SaveChanges();
        return recipe;
    }

    public void Delete(string id)
    {
        var recipe = GetOne(id);
        if (recipe is null)
        {
            return;
        }
        _recipes.Remove(recipe);
        _context.SaveChanges();
    }

    public IEnumerable<Recipe> GetAll() => _recipes.AsEnumerable();

    public Recipe? GetOne(string id) => _recipes.SingleOrDefault(c => c.Id.Equals(id));

    public Recipe Update(string id, string name, int servings, string ingredients, string instructions, string? source, string image, string? comments)
    {
        var foundRecipe = GetOne(id) ?? throw new KeyNotFoundException($"No recipe of ID {id} was found");

        foundRecipe.Name = name;
        foundRecipe.Servings = servings;
        foundRecipe.Ingredients = ingredients;
        foundRecipe.Instructions = instructions;
        foundRecipe.Source = source;
        foundRecipe.ImgURL = image;
        foundRecipe.Comments = comments;

        _context.SaveChanges();
        return foundRecipe;
    }
}
