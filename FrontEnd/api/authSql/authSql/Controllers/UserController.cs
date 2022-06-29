<<<<<<< HEAD
﻿using authSql.IRepository;
using authSql.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace authSql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IConfiguration _config;
        IUserRepository _oUserRepository = null;

        public UserController(IConfiguration config, IUserRepository oUserRepository) {

            _config = config;
            _oUserRepository = oUserRepository;

        }
        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Registration([FromBody] User model)
        {
            try
            {
                model = await _oUserRepository.Save(model);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet]
        [Route("signin/{email}/{password}")]
        public async Task<IActionResult> Signing(string email, string password)
        {
            try
            {
                User model = new User()
                {
                    Email=email,
                    Password=password
                };
                var user = await AuthenticationUser(model);
                if(user.UserId == 0) return StatusCode((int)HttpStatusCode.NotFound, "Invalid user");
                user.Token = GenerateToken(model);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        private String GenerateToken(User model)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                null,
                expires : DateTime.Now.AddHours(3),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<User> AuthenticationUser(User user)
        {
            return await _oUserRepository.GetByEmailPassword(user);
        }
    }
}
=======
﻿using authSql.IRepository;
using authSql.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace authSql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IConfiguration _config;
        IUserRepository _oUserRepository = null;

        public UserController(IConfiguration config, IUserRepository oUserRepository) {

            _config = config;
            _oUserRepository = oUserRepository;

        }
        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Registration([FromBody] User model)
        {
            try
            {
                model = await _oUserRepository.Save(model);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet]
        [Route("signin/{email}/{password}")]
        public async Task<IActionResult> Signing(string email, string password)
        {
            try
            {
                User model = new User()
                {
                    Email=email,
                    Password=password
                };
                var user = await AuthenticationUser(model);
                if(user.UserId == 0) return StatusCode((int)HttpStatusCode.NotFound, "Invalid user");
                user.Token = GenerateToken(model);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        private String GenerateToken(User model)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                null,
                expires : DateTime.Now.AddHours(3),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<User> AuthenticationUser(User user)
        {
            return await _oUserRepository.GetByEmailPassword(user);
        }
    }
}
>>>>>>> 2950b8467fd53fef76e95c700226553ccfdff12d
