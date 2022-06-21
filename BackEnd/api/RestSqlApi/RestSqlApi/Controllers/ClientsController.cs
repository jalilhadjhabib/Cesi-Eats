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
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("GetClients", myCon))
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
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsAppCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("AddClient", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter p1 = new SqlParameter("ClientID", client.ClientID);
                    SqlParameter p2 = new SqlParameter("Name", client.Name);
                    SqlParameter p3 = new SqlParameter("Mail", client.Mail);
                    SqlParameter p4 = new SqlParameter("MailStatus", client.MailStatus);
                    SqlParameter p5 = new SqlParameter("Password", client.Password);
                    SqlParameter p6 = new SqlParameter("Phone", client.Phone);
                    SqlParameter p7 = new SqlParameter("CreditCard", client.CreditCard);
                    SqlParameter p8 = new SqlParameter("ParainName", client.ParainName);
                    SqlParameter p9 = new SqlParameter("ParainStatus", client.ParainStatus);
                    SqlParameter p10 = new SqlParameter("FilleulName", client.FilleulName);
                    SqlParameter p11 = new SqlParameter("FilleulStatus", client.FilleulStatus);
                    SqlParameter p12 = new SqlParameter("ConnectionStatus", client.ConnectionStatus);
                    com.Parameters.Add(p1);
                    com.Parameters.Add(p2);
                    com.Parameters.Add(p3);
                    com.Parameters.Add(p4);
                    com.Parameters.Add(p5);
                    com.Parameters.Add(p6);
                    com.Parameters.Add(p7);
                    com.Parameters.Add(p8);
                    com.Parameters.Add(p9);
                    com.Parameters.Add(p10);
                    com.Parameters.Add(p11);
                    com.Parameters.Add(p12);
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
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("ModifyClient", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter p1 = new SqlParameter("ClientID", client.ClientID);
                    SqlParameter p2 = new SqlParameter("Name", client.Name);
                    SqlParameter p3 = new SqlParameter("Mail", client.Mail);
                    SqlParameter p4 = new SqlParameter("MailStatus", client.MailStatus);
                    SqlParameter p5 = new SqlParameter("Password", client.Password);
                    SqlParameter p6 = new SqlParameter("Phone", client.Phone);
                    SqlParameter p7 = new SqlParameter("CreditCard", client.CreditCard);
                    SqlParameter p8 = new SqlParameter("ParainName", client.ParainName);
                    SqlParameter p9 = new SqlParameter("ParainStatus", client.ParainStatus);
                    SqlParameter p10 = new SqlParameter("FilleulName", client.FilleulName);
                    SqlParameter p11 = new SqlParameter("FilleulStatus", client.FilleulStatus);
                    SqlParameter p12 = new SqlParameter("ConnectionStatus", client.ConnectionStatus);
                    com.Parameters.Add(p1);
                    com.Parameters.Add(p2);
                    com.Parameters.Add(p3);
                    com.Parameters.Add(p4);
                    com.Parameters.Add(p5);
                    com.Parameters.Add(p6);
                    com.Parameters.Add(p7);
                    com.Parameters.Add(p8);
                    com.Parameters.Add(p9);
                    com.Parameters.Add(p10);
                    com.Parameters.Add(p11);
                    com.Parameters.Add(p12);
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
            string sqlDataSource = _configuration.GetConnectionString("CesiEatsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand com = new SqlCommand("DeleteClient", myCon))
                {
                    com.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlParameter p1 = new SqlParameter("ClientID", id);
                    com.Parameters.Add(p1);
                    myReader = com.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }

                return new JsonResult("Client has been deleted !");
            }

        }
    }
}
