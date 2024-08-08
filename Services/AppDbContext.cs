using Microsoft.EntityFrameworkCore;
using recipeManagerBackend.Models;

namespace recipeManagerBackend.Services;

public class RecipesContext : DbContext
{
    public RecipesContext(DbContextOptions<RecipesContext> options)
        : base(options)
    {
    }

    public DbSet<Recipe> Recipes { get; set; } = null!;
}