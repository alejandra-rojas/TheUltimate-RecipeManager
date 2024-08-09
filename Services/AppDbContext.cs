using Microsoft.EntityFrameworkCore;
using recipeManagerBackend.Models;

namespace recipeManagerBackend.Services;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public required DbSet<Recipe> Recipes { get; set; }
}


// public class RecipesContext : DbContext
// {
//     public RecipesContext(DbContextOptions<RecipesContext> options)
//         : base(options)
//     {
//     }

//     public DbSet<Recipe> Recipes { get; set; } = null!;
// }