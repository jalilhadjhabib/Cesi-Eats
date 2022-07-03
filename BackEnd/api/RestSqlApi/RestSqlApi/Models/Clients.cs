using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestSqlApi.Models
{
    public class Clients
    {
        public int UserId { get; set; }
        //public int id { get; set; }
        public string Username { get; set; }

        public string Email { get; set; }

        public bool IsMailConfirmed { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string CreditCard { get; set; }
        public string user_type { get; set; }
        public string ConnectionStatus { get; set; }








    }
}
