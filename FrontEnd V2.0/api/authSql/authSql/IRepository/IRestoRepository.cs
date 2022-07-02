using authSql.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.IRepository
{
    public interface IRestoRepository
    {
        Task<Resto> Save(Resto obj);
        Task<Resto> Get(int ObjId);
        Task<List<Resto>> Gets();
        Task<Resto> GetByEmailPassword(Resto Resto);
        Task<string> Delete(Resto obj);
    }
}

   
   
