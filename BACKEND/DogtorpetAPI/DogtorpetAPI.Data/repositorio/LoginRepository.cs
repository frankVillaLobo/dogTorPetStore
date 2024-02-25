using Dapper;
using DogtorpetAPIModel;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DogtorpetAPI.Data.repositorio
{
    public class LoginRepository : ILoginRepository

    {
        private readonly string _connectionString;
        public LoginRepository(IConfiguration configuracion)
        {

            _connectionString = configuracion.GetConnectionString("MySqLConnection");
        }

        public LoginRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<bool> DeleteLogin(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM login WHERE id = @Id";

                var result = await db.ExecuteAsync(sql, new { Id = id });

                return result > 0;
            }
        }


        public async Task<IEnumerable<Login>> GetAlllogins()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                var sql = @"Select Id, Usuario, Email, Contraseña
                        FROM login";

                return await db.QueryAsync<Login>(sql, new { });

            }
        }

        public async Task<Login> GetDetails(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                var sql = @"Select Id, Usuario, Email, Contraseña
                        FROM login
                        WHERE id = @Id";

                return await db.QueryFirstOrDefaultAsync<Login>(sql, new { Id = id });
            }
        }

        public async Task<bool> InsertLogin(Login login)
        {
                using (IDbConnection db = new SqlConnection(_connectionString))
                {

                    var sql = @"INSERT INTO login (Usuario, Email, Contraseña)
                        VALUES (@Usuario, @Email, @Contraseña)";

                    var result = db.Execute(sql, new
                    { login.Usuario, login.Email, login.Contraseña });

                    return result > 0;
                }
        }

        public async Task<bool> UpdateLogin(Login login)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                var sql = @"UPDATE login 
                        SET Usuario = @Usuario,
                            Email  = @Email,
                            Contraseña = @Contraseña
                            WHERE id = @Id";


                var result = db.Execute(sql, new
                { login.Usuario, login.Email, login.Contraseña, login.Id });

                return result > 0;

            }
        }

    }
}
