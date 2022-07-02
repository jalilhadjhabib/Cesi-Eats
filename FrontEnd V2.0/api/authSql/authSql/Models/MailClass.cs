using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.Models
{
    public class MailClass
    {
        public string FromMailId { get; set; } = "cesieats.oran@gmail.com";
        public string FromMailIdPassword { get; set; } = "IngeCesiORAN31A4";
        public List<string> ToMailIds { get; set; } = new List<string>();
        public string Subject { get; set; } = "";
        public string Body { get; set; } = "";
        public bool IsBodyHtml { get; set; } = true;
        public List<string> Attachements { get; set; } = new List<string>();
    }   
}
