<<<<<<< HEAD
﻿using authSql.IRepository;
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
    public class ClientRepository : IClientRepository
    {

        string _connectionString = "";
        Client _oClient = new Client();
        List<Client> _oClients = new List<Client>();

        public ClientRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("CesiEatsDB");
        }

        public async Task<List<Client>> Gets2()
        {
            _oClient = new Client();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Clients = await con.QueryAsync<Client>(@"SELECT * FROM Client");
                if (Clients != null && Clients.Count() > 0)
                {
                    _oClients = Clients.ToList();
                }
            }
            return _oClients;
        }

        public async Task<List<Client>> Gets1()
        {
            _oClient = new Client();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Clients = await con.QueryAsync<Client>(@"SELECT * FROM Client");
                if (Clients != null && Clients.Count() > 0)
                {
                    _oClients = Clients.ToList();
                }
            }
            return _oClients;
        }
    }
}
=======
﻿using authSql.IRepository;
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
    public class ClientRepository : IClientRepository
    {

        string _connectionString = "";
        Client _oClient = new Client();
        List<Client> _oClients = new List<Client>();

        public ClientRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("CesiEatsDB");
        }

        public async Task<List<Client>> Gets2()
        {
            _oClient = new Client();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Clients = await con.QueryAsync<Client>(@"SELECT * FROM Client");
                if (Clients != null && Clients.Count() > 0)
                {
                    _oClients = Clients.ToList();
                }
            }
            return _oClients;
        }

        public async Task<List<Client>> Gets1()
        {
            _oClient = new Client();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Clients = await con.QueryAsync<Client>(@"SELECT * FROM Client");
                if (Clients != null && Clients.Count() > 0)
                {
                    _oClients = Clients.ToList();
                }
            }
            return _oClients;
        }
    }
}
>>>>>>> 2950b8467fd53fef76e95c700226553ccfdff12d
