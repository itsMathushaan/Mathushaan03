using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TOnboardEMS.Model
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
