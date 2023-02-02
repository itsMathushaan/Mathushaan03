 using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TOnboardEMS.Repository;

var builder = WebApplication.CreateBuilder(args);

var myAllowAllHeadersPolicy = "MyAllowAllHeadersPolicy";
// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowAllHeadersPolicy,
        policy =>
        {
            policy.WithOrigins("http://localhost:5159/api/Login", "https://localhost:44438")
                   .AllowAnyHeader();
        });
});



builder.Services.AddDbContext<OnboardContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("OnboardDatabase")));
builder.Services.AddControllersWithViews();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseCors(myAllowAllHeadersPolicy);
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
