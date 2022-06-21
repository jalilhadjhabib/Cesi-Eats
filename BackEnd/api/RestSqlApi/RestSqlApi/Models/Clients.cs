using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestSqlApi.Models
{
    public class Clients
    {
        public int ClientID { get; set; }
        //public int id { get; set; }
        public string Name { get; set; }

        public string Mail { get; set; }

        public string MailStatus { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public int CreditCard { get; set; }
        public string ParainStatus { get; set; }
        public string ParainName { get; set; }
        public string FilleulName { get; set; }
        public string FilleulStatus { get; set; }
        public bool ConnectionStatus { get; set; }








    }
}
