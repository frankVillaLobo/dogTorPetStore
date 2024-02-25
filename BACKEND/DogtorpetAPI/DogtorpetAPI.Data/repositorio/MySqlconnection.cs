
namespace DogtorpetAPI.Data.repositorio
{
    public class MySqlconnection
    {
        private string conecctionString;

        public MySqlconnection(string conecctionString)
        {
            this.conecctionString = conecctionString;
        }

        internal int Execute(string sql, object value)
        {
            throw new NotImplementedException();
        }

        internal Task<IEnumerable<T>> QueryAsync<T>(string sql, object value)
        {
            throw new NotImplementedException();
        }

        internal Task<T> QueryFirsOrDefaultAsync<T>(string sql, object value)
        {
            throw new NotImplementedException();
        }
    }
}