using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DogtorpetAPI.Data
{
    public class MySqlconfiguration
    {
        public MySqlconfiguration(string connectionString) 
        {
            ConecctionString = connectionString;
        }
        public string ConecctionString { get; set; }
    }
}
