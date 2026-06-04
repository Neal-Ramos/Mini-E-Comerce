using Application;
using Infra;

var builder = WebApplication.CreateBuilder(args);
var isDevelopment = builder.Environment.IsDevelopment();

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration, isDevelopment);

var app = builder.Build();

app.Run();