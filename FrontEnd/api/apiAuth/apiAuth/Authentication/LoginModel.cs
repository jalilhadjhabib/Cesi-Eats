using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace apiAuth.Authentication
{
    public class LoginModel
    {
        [Required(ErrorMessage = "User Name is required to log in")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Password is requiered to log in")]
        public string Password { get; set; }
    }
}
