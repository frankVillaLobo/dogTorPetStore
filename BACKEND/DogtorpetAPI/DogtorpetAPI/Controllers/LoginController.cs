using DogtorpetAPI.Data.repositorio;
using DogtorpetAPIModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DogtorpetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginRepository _loginRepository;

        public LoginController(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLogins()
        {
            return Ok(await _loginRepository.GetAlllogins());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLoginDetails(int id)
        {
            return Ok(await _loginRepository.GetDetails(id));
        }
        [HttpPost]
        public async Task<IActionResult> CreateLogin([FromBody] Login login)
        {
            if (login == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _loginRepository.InsertLogin(login);

            return Created("created", created);

        }
        [HttpPut]
        public async Task<IActionResult> UpdateLogin([FromBody] Login login)
        {
            if (login == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _loginRepository.UpdateLogin(login);

            return NoContent();

        }

        [HttpDelete]

        public async Task<IActionResult> DeleteLogin(int id)
        {
            await _loginRepository.DeleteLogin(id);

            return NoContent();
        }
    
    }
}
