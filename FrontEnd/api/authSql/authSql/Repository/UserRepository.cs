<<<<<<< HEAD
﻿using authSql.Common;
using authSql.IRepository;
using authSql.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.Repository
{
    public class UserRepository : IUserRepository
    {
        string _connectionString = "";
        User _oUser = new User();
        List<User> _oUsers = new List<User>();

        public UserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("CesiEatsDB");
        }
        public async Task<string> Delete(User obj)
        {
            string message = "";
            try
            {
                using (IDbConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed) con.Open();
                    var Users = await con.QueryAsync<User>("SP_User",
                        this.SetParameters(obj, (int)OperationType.Delete),
                        commandType: CommandType.StoredProcedure);
                    message = "Deleted";
                }
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }
            return message;    
            }

        //METHOD USED TO GET A SPECEFIC USER BY ID
        public async Task<User> Get(int ObjId)
        {
            _oUser = new User();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Users = await con.QueryAsync<User>(string.Format(@"SELECT * FROM User WHERE UserId = {0}", ObjId));
                if (Users != null && Users.Count() > 0)
                {
                    _oUser = Users.SingleOrDefault();
                }
            }
            return _oUser;
        }

        //METHOD USED FOR USER LOGIN
        public async Task<User> GetByEmailPassword(User user)
        {
            _oUser = new User();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                string sql =  string.Format(@"SELECT * FROM [User] WHERE Email= '"+user.Email+ "' AND Password = '" + user.Password + "'");
                var Users = await con.QueryAsync<User>(sql);
                if (Users != null && Users.Count() > 0)
                {
                    _oUser = Users.SingleOrDefault();
                }
            }
            return _oUser;
        }

        //METHOD USED TO GET ALL USERS
        public async Task<List<User>> Gets()
        {
            _oUser = new User();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Users = await con.QueryAsync<User>(@"SELECT * FROM User");
                if (Users != null && Users.Count() > 0)
                {
                    _oUsers = Users.ToList();
                }
            }
            return _oUsers;
        }
        
        //Method to add or alter a user
        public async Task<User> Save(User obj)
        {
            _oUser = new User();

            try
            {

                int operationType = Convert.ToInt32(obj.UserId == 0 ? OperationType.Insert : OperationType.Update);
                using (IDbConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed) con.Open();

                    var Users = await con.QueryAsync<User>("SP_User",
                        this.SetParameters(obj, operationType),
                        commandType: CommandType.StoredProcedure);
                    if(Users != null && Users.Count() > 0) _oUser = Users.FirstOrDefault();

                }

            }
            catch (Exception ex)
            {
                _oUser = new User();
                _oUser.Message = ex.Message;
            }

            return _oUser;
        }

        private DynamicParameters SetParameters(User oUser, int nOperationType)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@UserId", oUser.UserId);
            parameters.Add("@Username", oUser.Username);
            parameters.Add("@Email", oUser.Email);
            parameters.Add("@Password", oUser.Password);
            parameters.Add("@Address", oUser.Password);
            parameters.Add("@Phone", oUser.Password);
            parameters.Add("@CreditCard", oUser.Password);
            parameters.Add("@OperationType", nOperationType);
            return parameters;
        }


    }

      
}
=======
﻿using authSql.Common;
using authSql.IRepository;
using authSql.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace authSql.Repository
{
    public class UserRepository : IUserRepository
    {
        string _connectionString = "";
        User _oUser = new User();
        List<User> _oUsers = new List<User>();

        public UserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("CesiEatsDB");
        }
        public async Task<string> Delete(User obj)
        {
            string message = "";
            try
            {
                using (IDbConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed) con.Open();
                    var Users = await con.QueryAsync<User>("SP_User",
                        this.SetParameters(obj, (int)OperationType.Delete),
                        commandType: CommandType.StoredProcedure);
                    message = "Deleted";
                }
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }
            return message;    
            }

        //METHOD USED TO GET A SPECEFIC USER BY ID
        public async Task<User> Get(int ObjId)
        {
            _oUser = new User();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Users = await con.QueryAsync<User>(string.Format(@"SELECT * FROM User WHERE UserId = {0}", ObjId));
                if (Users != null && Users.Count() > 0)
                {
                    _oUser = Users.SingleOrDefault();
                }
            }
            return _oUser;
        }

        //METHOD USED FOR USER LOGIN
        public async Task<User> GetByEmailPassword(User user)
        {
            _oUser = new User();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                string sql =  string.Format(@"SELECT * FROM [User] WHERE Email= '"+user.Email+ "' AND Password = '" + user.Password + "'");
                var Users = await con.QueryAsync<User>(sql);
                if (Users != null && Users.Count() > 0)
                {
                    _oUser = Users.SingleOrDefault();
                }
            }
            return _oUser;
        }

        //METHOD USED TO GET ALL USERS
        public async Task<List<User>> Gets()
        {
            _oUser = new User();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Users = await con.QueryAsync<User>(@"SELECT * FROM User");
                if (Users != null && Users.Count() > 0)
                {
                    _oUsers = Users.ToList();
                }
            }
            return _oUsers;
        }
        
        //Method to add or alter a user
        public async Task<User> Save(User obj)
        {
            _oUser = new User();

            try
            {

                int operationType = Convert.ToInt32(obj.UserId == 0 ? OperationType.Insert : OperationType.Update);
                using (IDbConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed) con.Open();

                    var Users = await con.QueryAsync<User>("SP_User",
                        this.SetParameters(obj, operationType),
                        commandType: CommandType.StoredProcedure);
                    if(Users != null && Users.Count() > 0) _oUser = Users.FirstOrDefault();

                }

            }
            catch (Exception ex)
            {
                _oUser = new User();
                _oUser.Message = ex.Message;
            }

            return _oUser;
        }

        private DynamicParameters SetParameters(User oUser, int nOperationType)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@UserId", oUser.UserId);
            parameters.Add("@Username", oUser.Username);
            parameters.Add("@Email", oUser.Email);
            parameters.Add("@Password", oUser.Password);
            parameters.Add("@Address", oUser.Password);
            parameters.Add("@Phone", oUser.Password);
            parameters.Add("@CreditCard", oUser.Password);
            parameters.Add("@OperationType", nOperationType);
            return parameters;
        }


    }

      
}
>>>>>>> 2950b8467fd53fef76e95c700226553ccfdff12d
