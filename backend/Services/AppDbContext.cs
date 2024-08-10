using Microsoft.EntityFrameworkCore;
using recipeManagerBackend.Models;

namespace recipeManagerBackend.Services;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public required DbSet<Recipe> Recipes { get; set; }
}

