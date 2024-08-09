using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using recipeManagerBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

//Data Services
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseInMemoryDatabase("RecipesList");
});
builder.Services.AddScoped<IRecipeRepository, RecipeRepository>();



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Recipes.API",
        Description = "An ASP.NET WebAPI for manageing your recipes",
    });
});

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.SeedDatabase();

}

app.UseHttpsRedirection();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
