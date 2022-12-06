using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace MauroPeniel___HR_System.Controllers
{
    public class UserController : Controller
    {
        SqlConnection con = new SqlConnection();

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        void connectionString()
        {

        }

        public ActionResult Verify(User acc)
        {
            return View();
        }
    }
}
