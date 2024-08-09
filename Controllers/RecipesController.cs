using Microsoft.AspNetCore.Mvc;
using recipeManagerBackend.Models;
using recipeManagerBackend.Services;

namespace recipeManagerBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecipesController(IRecipeRepository repo) : ControllerBase
{
    private readonly IRecipeRepository _repo = repo;

    [HttpGet]
    public IEnumerable<Recipe> ListRecipes() => _repo.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Recipe> GetRecipe(string id)
    {
        return _repo.GetOne(id) is Recipe foundRecipe
          ? foundRecipe
          : NotFound($"Recipe with ID: '{id}' was not found");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteRecipe(string id)
    {
        _repo.Delete(id);
        return NoContent();
    }

}