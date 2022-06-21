using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LinqDataApp
{
    public partial class Form1 : Form
    {
        
        
        
        public Form1()
        {
            InitializeComponent();

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Global.servName = serverNameBox.Text;

            DialogResult d = MessageBox.Show("Connection Success!", "NOTIFICATION", MessageBoxButtons.OK, MessageBoxIcon.Information);

            if (d == DialogResult.OK)
            {
                
                this.Hide();
                Form2 f2 = new Form2();
                f2.ShowDialog();
            }
            
        }

        
    }
}
