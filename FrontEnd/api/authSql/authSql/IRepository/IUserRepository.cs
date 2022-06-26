using authSql.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.IRepository
{
    public interface IUserRepository
    {
        Task<User> Save(User obj);
        Task<User> Get(int ObjId);
        Task<List<User>> Gets();
        Task<User> GetByEmailPassword(User user);
        Task<string> Delete(User obj);
    }
}
