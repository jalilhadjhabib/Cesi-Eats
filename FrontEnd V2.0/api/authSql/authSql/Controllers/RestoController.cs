using authSql.IRepository;
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
    public class RestoController : ControllerBase
    {
        private IConfiguration _config;
        IRestoRepository _oRestoRepository = null;

        public RestoController(IConfiguration config, IRestoRepository oRestoRepository) {

            _config = config;
            _oRestoRepository = oRestoRepository;

        }
        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Registration([FromBody] Resto model)
        {
            try
            {
                model = await _oRestoRepository.Save(model);
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
                Resto model = new Resto()
                {
                    Email=email,
                    Password=password
                };
                var Resto = await AuthenticationResto(model);
                if(Resto.RestoId == 0) return StatusCode((int)HttpStatusCode.NotFound, "Invalid Resto");
                Resto.Token = GenerateToken(model);
                return Ok(Resto);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        private String GenerateToken(Resto model)
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

        private async Task<Resto> AuthenticationResto(Resto Resto)
        {
            return await _oRestoRepository.GetByEmailPassword(Resto);
        }
    }
}
