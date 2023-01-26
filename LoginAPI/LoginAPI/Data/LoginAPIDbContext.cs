using LoginAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Data
{
    public class LoginAPIDbContext : IdentityDbContext
    {
        public LoginAPIDbContext(DbContextOptions connectionString) : base(connectionString)
        {
        }

        public DbSet<Login> Logins  { get; set; }
    }
}
