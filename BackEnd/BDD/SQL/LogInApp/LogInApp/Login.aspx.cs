using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LogInApp
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            {
                string strcon = @"Server =DESKTOP-LE69RUT\CESIEATS; Database = CESI-EATS; User ID = admin; Password = arsenik98";
                SqlConnection con = new SqlConnection(strcon);
                SqlCommand com = new SqlCommand("CUser", con);
                com.CommandType = System.Data.CommandType.StoredProcedure;
                SqlParameter p1 = new SqlParameter("Mail", LoginmailText.Text);
                SqlParameter p2 = new SqlParameter("Password", loginpwdText.Text);
                com.Parameters.Add(p1);
                com.Parameters.Add(p2);
                con.Open();
                SqlDataReader rd = com.ExecuteReader();
                if (rd.HasRows)
                {
                    rd.Read();
                    Response.Write("<script>alert('Logged in!');</script>");

                }
                else
                {
                    Response.Write("<script>alert('Invalid Password Or Email!');</script>");
                }
            }
        }
    }
}