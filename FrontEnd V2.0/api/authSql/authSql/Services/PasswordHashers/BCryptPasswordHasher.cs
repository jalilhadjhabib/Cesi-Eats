using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.Services.PasswordHashers
{
    public class BCryptPasswordHasher : IPasswordHasher
    {
        public string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
