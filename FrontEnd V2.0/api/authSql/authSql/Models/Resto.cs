using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.Models
{
    public class Resto
    {
        public int RestoId { get; set; }
        public string RestoName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string EmailStatus { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string CreditCard { get; set; }
        public string ConnectionStatus { get; set; }

        public string Token { get; set; }

        public string Message { get; set; }
    }
}
