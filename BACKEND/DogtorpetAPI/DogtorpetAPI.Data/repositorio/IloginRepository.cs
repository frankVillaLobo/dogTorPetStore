using DogtorpetAPIModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DogtorpetAPI.Data.repositorio
{
    public interface ILoginRepository
    {
        Task<IEnumerable<Login>> GetAlllogins();
        Task<Login> GetDetails(int id);
        Task<bool> InsertLogin(Login login);
        Task<bool> UpdateLogin(Login login);
        Task<bool> DeleteLogin(int id);

    }
}
