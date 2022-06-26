using authSql.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.IRepository
{
    public interface IClientRepository
    {
        Task<List<Client>> Gets1();
        Task<List<Client>> Gets2();
    }
}
