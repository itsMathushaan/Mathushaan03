﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics;
using TOnboardEMS.BLL;
using TOnboardEMS.Model;
using TOnboardEMS.Repository;

namespace TOnboardEMS.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessController : ControllerBase
    {
        private readonly OnboardContext Context;

        public AccessController(OnboardContext context)
        {
            Context = context;
        }

        
        [HttpGet("GetAllRoles")]
        public ActionResult GetAllRoles()
        {
            Debug.WriteLine("Shuaib DB Connect:"+Context.Database.GetDbConnection().ConnectionString);
            RoleBLL RoleLogic = new RoleBLL(Context);
            var results = RoleLogic.ViewAllRoles();
            if (results == null)
            {
                Console.WriteLine("Not Found");
                return NotFound("Not Found");
            }
            else
            {
                Console.WriteLine(results);
                return Ok(results);
            }
        }

        [HttpGet("GetRole/{id}")]
        public ActionResult GetRole(int id)
        {
            RoleBLL roleLogic = new RoleBLL(Context);
            var roledata = roleLogic.ViewRoleById(id);
            if (roledata == null)
            {
                return NotFound("Not Found");
            }
            else
            {
                return Ok(roledata);
            }
        }

        [HttpPost("AddNewRole")]
        public ActionResult AddNewRole(Role roleData)
        {
            RoleBLL RoleLogic = new RoleBLL(Context);
            if (roleData == null)
            {
                return BadRequest("Bad Request");
            }
            else
            {
                roleData.CreatedOn = DateTime.Now;
                RoleLogic.AddRole(roleData);
                return Ok("New Role is Added.");
            }
        }

        [HttpPut("UpdateRole")]
        public ActionResult UpdateRole(Role roleData)
        {
            RoleBLL RoleLogic = new RoleBLL(Context);
            if (roleData == null)
            {
                return BadRequest("Bad Request");
            }
            else 
            {
                RoleLogic.UpdateRoleDetails(roleData);
                return Ok("Updated Successfully");
            }
        }

        [HttpDelete("DeleteRole")]
        public ActionResult DeleteRole(Role roleData)
        {
            RoleBLL RoleLogic = new RoleBLL(Context);
            if (roleData == null)
            {
                return BadRequest("Bad Request");
            }
            else
            {
                RoleLogic.RemoveRole(roleData);
                return Ok("Successfully Deleted");
            }
        }

        [HttpDelete("DeleteRole/{id}")]
        public ActionResult DeleteRole(int id)
        {
            RoleBLL RoleLogic = new RoleBLL(Context);
            try
            {
                RoleLogic.RemoveRoleById(id);
                return Ok("Successfully deleted");
            }catch 
            {
                return Content("Could not delete");
            }
        }
    }
}
