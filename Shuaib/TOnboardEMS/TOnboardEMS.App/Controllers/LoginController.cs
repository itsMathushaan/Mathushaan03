using Microsoft.AspNetCore.Mvc;
using TOnboardEMS.BLL;
using TOnboardEMS.Model;
using TOnboardEMS.Repository;

namespace TOnboardEMS.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly OnboardContext dbContext;

        public LoginController(OnboardContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetLogin/{id}")]
        public async Task<IActionResult> GetLogin([FromRoute] int id)

        {
            try
            {
                var signin = await dbContext.Logins.FindAsync(id);
                if (signin == null)
                {
                    return NotFound();
                }
                return Ok(signin);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpPost("AddLogin")]
        public async Task<IActionResult> AddLogin(Login login)
        {


            using (var uow = new UnitOfWork(dbContext)) 
            {
                
            }
                try
                {


                    var signin = new Login()
                    {
                        /*Id = login.Id,
                        EmployeeId = login.EmployeeId,*/
                        Username = login.Username,
                        Password = login.Password
                    };

                    /* await dbContext.Logins.AddAsync(login);
                     await dbContext.SaveChangesAsync();*/

                    return Ok(login);
                }
                catch (Exception ex)
                {
                    if (ex.Message == "An error occurred while saving the entity changes. See the inner exception for details.")
                    {
                        return Ok("The employee is already registered.Recheck the employee ID before registration");
                    }
                    return BadRequest(ex.Message);
                }

        }

        [HttpPut("UpdateLogin/{id}")]
        public async Task<IActionResult> UpdateLogin([FromRoute] int id, Login login)
        {
            try
            {
                var signin = await dbContext.Logins.FindAsync(id);

                if (signin != null)
                {
                    signin.Id = login.Id;
                    signin.EmployeeId = login.EmployeeId;
                    signin.Username = login.Username;
                    signin.Password = login.Password;

                    await dbContext.SaveChangesAsync();

                    return Ok(signin);
                }
                return BadRequest();

            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }


        }

        [HttpDelete("DeleteLogin/{id}")]
        public async Task<IActionResult> DeleteLogin([FromRoute] int id)
        {

            try
            {
                var signin = await dbContext.Logins.FindAsync(id);
                if (signin != null)
                {
                    dbContext.Remove(signin);
                    await dbContext.SaveChangesAsync();

                    return Ok("Deactivated!");
                }
                return BadRequest();

            }
            catch (Exception ex)
            {

                return Ok(ex.Message);

            }

        }
    }
}

