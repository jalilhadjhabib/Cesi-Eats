using authSql.IRepository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private IConfiguration _config;
        IClientRepository _oClientRepository = null;

        public ClientController(
            IConfiguration config, IClientRepository oClientRepository)
        {
            _config = config;
            _oClientRepository = oClientRepository;

        }

        [HttpGet]
        [Route("Gets1")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Gets1()
        {
            var list = await _oClientRepository.Gets1();
            return Ok(list);
        }
        [HttpGet]
        [Route("Gets2")]

        public async Task<IActionResult> Gets2()
        {
            var list = await _oClientRepository.Gets2();
            return Ok(list);
        }


    }
}
