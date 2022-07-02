using authSql.Common;
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
    public class RestoRepository : IRestoRepository
    {
        string _connectionString = "";
        Resto _oResto = new Resto();
        List<Resto> _oRestos = new List<Resto>();

        public RestoRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("CesiEatsDB");
        }
        public async Task<string> Delete(Resto obj)
        {
            string message = "";
            try
            {
                using (IDbConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed) con.Open();
                    var Restos = await con.QueryAsync<Resto>("SP_Resto",
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

        //METHOD USED TO GET A SPECEFIC Resto BY ID
        public async Task<Resto> Get(int ObjId)
        {
            _oResto = new Resto();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Restos = await con.QueryAsync<Resto>(string.Format(@"SELECT * FROM Resto WHERE RestoId = {0}", ObjId));
                if (Restos != null && Restos.Count() > 0)
                {
                    _oResto = Restos.SingleOrDefault();
                }
            }
            return _oResto;
        }

        //METHOD USED FOR Resto LOGIN
        public async Task<Resto> GetByEmailPassword(Resto Resto)
        {
            _oResto = new Resto();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                string sql = string.Format(@"SELECT * FROM [Resto] WHERE Email= '" + Resto.Email + "' AND Password = '" + Resto.Password + "'");
                var Restos = await con.QueryAsync<Resto>(sql);
                if (Restos != null && Restos.Count() > 0)
                {
                    _oResto = Restos.SingleOrDefault();
                }
            }
            return _oResto;
        }

        //METHOD USED TO GET ALL RestoS
        public async Task<List<Resto>> Gets()
        {
            _oResto = new Resto();
            using (IDbConnection con = new SqlConnection(_connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();
                var Restos = await con.QueryAsync<Resto>(@"SELECT * FROM Resto");
                if (Restos != null && Restos.Count() > 0)
                {
                    _oRestos = Restos.ToList();
                }
            }
            return _oRestos;
        }

        //Method to add or alter a Resto
        public async Task<Resto> Save(Resto obj)
        {
            _oResto = new Resto();

            try
            {

                int operationType = Convert.ToInt32(obj.RestoId == 0 ? OperationType.Insert : OperationType.Update);
                using (IDbConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed) con.Open();

                    var Restos = await con.QueryAsync<Resto>("SP_Resto",
                        this.SetParameters(obj, operationType),
                        commandType: CommandType.StoredProcedure);
                    if (Restos != null && Restos.Count() > 0) _oResto = Restos.FirstOrDefault();

                }

            }
            catch (Exception ex)
            {
                _oResto = new Resto();
                _oResto.Message = ex.Message;
            }

            return _oResto;
        }

        private DynamicParameters SetParameters(Resto oResto, int nOperationType)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@RestoId", oResto.RestoId);
            parameters.Add("@Restoname", oResto.RestoName);
            parameters.Add("@Email", oResto.Email);
            parameters.Add("@Password", oResto.Password);
            parameters.Add("@Address", (oResto.Address));
            parameters.Add("@Phone", oResto.Phone);
            parameters.Add("@CreditCard", oResto.CreditCard);
            parameters.Add("@OperationType", nOperationType);
            return parameters;
        }
    }
}
