using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using RestSqlApi.Models;
 
namespace RestSqlApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ClientsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("SP_GetClients", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    myReader = com.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }

                return new JsonResult(table);
            }
        }
        [HttpPost]
        public JsonResult Post(Clients client)
        {
            SqlDataReader myReader;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsDB");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("AddClient", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter p1 = new SqlParameter("UserId", client.UserId);
                    SqlParameter p2 = new SqlParameter("Name", client.Username);
                    SqlParameter p3 = new SqlParameter("Mail", client.Email);
                    SqlParameter p4 = new SqlParameter("MailStatus", client.IsMailConfirmed);
                    SqlParameter p5 = new SqlParameter("Password", client.Password);
                    SqlParameter p6 = new SqlParameter("Phone", client.Phone);
                    SqlParameter p7 = new SqlParameter("CreditCard", client.CreditCard);
                    SqlParameter p8 = new SqlParameter("ConnectionStatus", client.ConnectionStatus);
                    com.Parameters.Add(p1);
                    com.Parameters.Add(p2);
                    com.Parameters.Add(p3);
                    com.Parameters.Add(p4);
                    com.Parameters.Add(p5);
                    com.Parameters.Add(p6);
                    com.Parameters.Add(p7);
                    com.Parameters.Add(p8);
                    myReader = com.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }

                return new JsonResult("Client Added Sucessfully!");
            }
        }

        [HttpPut]
        public JsonResult Put(Clients client)
        {


            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("ModifyClient", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter p1 = new SqlParameter("UserId", client.UserId);
                    SqlParameter p2 = new SqlParameter("Name", client.Username);
                    SqlParameter p3 = new SqlParameter("Mail", client.Email);
                    SqlParameter p4 = new SqlParameter("MailStatus", client.IsMailConfirmed);
                    SqlParameter p5 = new SqlParameter("Password", client.Password);
                    SqlParameter p6 = new SqlParameter("Phone", client.Phone);
                    SqlParameter p7 = new SqlParameter("CreditCard", client.CreditCard);
                    SqlParameter p8 = new SqlParameter("ConnectionStatus", client.ConnectionStatus);
                    com.Parameters.Add(p1);
                    com.Parameters.Add(p2);
                    com.Parameters.Add(p3);
                    com.Parameters.Add(p4);
                    com.Parameters.Add(p5);
                    com.Parameters.Add(p6);
                    com.Parameters.Add(p7);
                    com.Parameters.Add(p8);
                    myReader = com.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();


                }

                return new JsonResult("Client has been altered with sucess!");
            }

        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
        

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsDB");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("DeleteClient", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter p1 = new SqlParameter("UserId", id);
                    com.Parameters.Add(p1);
                    myReader = com.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }

                return new JsonResult("L'utilisateur a bien été supprimer !");
            }

        }
    }
}
