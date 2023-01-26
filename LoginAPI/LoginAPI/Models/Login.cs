using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Models
{
    [Table("Login")]
    public class Login
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Employee")]
        /*[AllowNull]*/
        public int EmployeeId { get; set; }
        public string Username { get; set; }

        [MinLength(8)]
        public string Password { get; set; }
    }
}
