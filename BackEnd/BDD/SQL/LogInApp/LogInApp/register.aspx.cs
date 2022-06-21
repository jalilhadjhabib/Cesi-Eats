using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LogInApp
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }

       

        protected void register_Click(object sender, EventArgs e)
        {
            var clientId = Guid.NewGuid();

            string strcon = @"Server =DESKTOP-LE69RUT\CESIEATS; Database = CESI-EATS; User ID = admin; Password = arsenik98";
            SqlConnection con = new SqlConnection(strcon);
            SqlCommand com = new SqlCommand("AddNewClient", con);
            com.CommandType = System.Data.CommandType.StoredProcedure;
            SqlParameter p1 = new SqlParameter("ClientID", clientId);
            SqlParameter p2 = new SqlParameter("Name", nameText.Text);
            SqlParameter p3 = new SqlParameter("Mail", mailText.Text);
            SqlParameter p4 = new SqlParameter("MailStatus", "Awaiting Validation");
            SqlParameter p5 = new SqlParameter("Password", pwdText.Text);
            SqlParameter p6 = new SqlParameter("Phone", phoneText.Text);
            SqlParameter p7 = new SqlParameter("CreditCard", creditText.Text);
            SqlParameter p8 = new SqlParameter("ParainName", "");
            SqlParameter p9 = new SqlParameter("ParainStatus", "");
            SqlParameter p10 = new SqlParameter("FilleulName", "");
            SqlParameter p11 = new SqlParameter("FilleulStatus", "");
            SqlParameter p12 = new SqlParameter("ConnectionStatus", false);
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
            con.Open();
            int i = com.ExecuteNonQuery();
            con.Close();
            if (i > 0)   
            {
                Response.Write("<script>alert('Registered Sucessfully!');</script>");
            }
            else
            {
                Response.Write("<script>alert('Failed to register!');</script>");
            }
        }

        protected void LinkButton1_Click(object sender, EventArgs e)
        {
            Response.Redirect("https://localhost:44393/Login.aspx");

        }
    }
}